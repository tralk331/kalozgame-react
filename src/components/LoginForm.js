import React, {useState, useContext} from 'react'
import axios from 'axios'
import {HeaderContext} from '../context/HeaderContext'
import { UserContext } from '../context/UserContext';
const LoginForm = ({changeForm}) => {
    const {toggleAuth} = useContext(HeaderContext);
    const {retrieveProfileData} = useContext(UserContext);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [loginError, setLoginError] = useState("");
    const handleLoginInput = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }
    const submitLogin = async e => {
        e.preventDefault();
        if (loginData.email === "" || loginData.password === ""){
            setLoginError("Fields must not be empty!");
            return;
        }
        try{
            const res = await axios.post("http://api.kalozgame.probaljaki.hu/login", JSON.stringify(loginData))
            if (res.status === 200) {
                localStorage.setItem("authToken",res.data)
                retrieveProfileData()
                toggleAuth()
            } else {
                setLoginError(res.data)
            }
        } catch (error) {
            if(error.response.data){
                setLoginError(error.response.data);
            }
        }
    }
    return(
        <form className="login-form">
            <input type="text" name="email"  placeholder="E-mail address" value={loginData.email} onChange={handleLoginInput}></input>
            <input type="password" name="password"  placeholder="Password" value={loginData.password} onChange={handleLoginInput}></input>
            <span className="error-label">{loginError}</span>
            <span className="change-form" onClick={() => changeForm(true)}>Don't have an account? Click here to create one!</span>
            <button type="submit" onClick={submitLogin}>Ménj</button>
        </form>
    )
}
export default LoginForm