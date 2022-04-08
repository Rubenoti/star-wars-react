import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../../shared/services/api'
import { useNavigate } from 'react-router'
import { JwtContext } from '../../shared/context/JwtContext'


const LoginForm = () => {
    let navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const { setJwt } = useContext(JwtContext)
    const onSubmit = (data) => {
        API.post('/users/login', data).then((response) => {
            console.log(response)
            localStorage.setItem('token', response.data)
            setJwt(response.data)
            navigate('/home')
        })
    }
    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>email</label>
                <input type='email' name="email" {...register('email', { require: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                <label>password</label>
                <input type='password' name="password" {...register('password', { require: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/ })} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm