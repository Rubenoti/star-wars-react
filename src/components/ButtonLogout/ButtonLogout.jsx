import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { JwtContext } from "../../shared/context/JwtContext";

const ButtonLogout = () => {
    let navigate = useNavigate();
    const { setJwt } = useContext(JwtContext);
    const logOut = () => {
        localStorage.removeItem('token');
        setJwt(null);
        navigate('/home');
    }

    return (
        <div className="navbar__head__login__item">
            <p onClick={logOut}>Logout</p>
        </div>
    )
}
export default ButtonLogout;




