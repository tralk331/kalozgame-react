import React, { useState} from 'react'
import {BsCheck} from 'react-icons/bs'
import AuthInput from './AuthInput'
import axios from 'axios'
const RegForm = ({changeForm}) => {
    const [regData, setRegData] = useState({
        email: "",
        username: "",
        password: "",
        passwordAgain: "",
        date: "",
    })
    const [errorData, setErrorData] = useState({
        emailError: "",
        usernameError: "",
        passwordError: "",
        finalError: ""
    })
    const [rulesAccepted, setRulesAccepted] = useState(false)
    const acceptLicense = () => {
        setRulesAccepted(!rulesAccepted)
    }
    const handleRegInput = (e) => {
        setRegData({...regData, [e.target.name]: e.target.value})
    }
    const submitRegister = async (e) => {
        e.preventDefault()
        for (const key in errorData){
            if (errorData[key] && key !== "finalError") {
                setErrorData({...errorData, finalError:"Please fill all input fields with proper values!"})
                return
            }
        }
        if (!rulesAccepted) {
            setErrorData({...errorData, finalError:"You need to agree to the terms and conditions!"})
        }
        else {
            setErrorData({...errorData, finalError:""})
        }
        try{
            const response = await axios.post("http://api.kalozgame.probaljaki.hu/register",JSON.stringify(regData))
            if (response.status === 422) setErrorData({...errorData, finalError:response.data})
            else if (response.status === 200) {
                setErrorData({...errorData, finalError:"Registered successfully. Please check your inbox to verify your account!"});
            }
        } catch (err){
            console.log(err)
        }
    }
    const rfc2822 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const supportedEmails = /[\s\S]*@(gmail\.com|yahoo\.com|hotmail\.com|freemail\.hu|citromail\.hu)/
    const checkValidEmail = () => {
        if(regData.email === "") setErrorData({...errorData, emailError:"E-mail field can't be empty!"})
        else if(!rfc2822.test(regData.email) && regData.email !== "") setErrorData({...errorData, emailError:"Please input a valid e-mail address"})
        else if (!supportedEmails.test(regData.email)) setErrorData({...errorData, emailError:"Unsupported e-mail provider."})
        else setErrorData({...errorData, emailError:""})
    }
    const checkValidUsername = () => {
        if (regData.username === "") setErrorData({...errorData, usernameError:"Username field can't be empty!"})
        else if (regData.username.length < 4) setErrorData({...errorData, usernameError:"Username should be 4 or more characters."})
        else if (regData.username.length > 24) setErrorData({...errorData, usernameError:"Username too long!"})
        else if (!/^[A-Za-z][A-Za-z0-9]*$/.test(regData.username)) setErrorData({...errorData, usernameError:"Only letters of the english alphabet and numbers allowed."})
        else if (/^(.*\s+.*)+$/.test(regData.username)) setErrorData({...errorData, usernameError:"Can't contain whitespaces."})
        else setErrorData({...errorData, usernameError:""})
    }
    const checkValidPassword = () => {
        if (regData.password === "") setErrorData({...errorData, passwordError:"Password can't be empty!"})
        else if (regData.passwordAgain !== "" && regData.password !== regData.passwordAgain) setErrorData({...errorData, passwordError:"Passwords don't match"})
        else if (/^(.{0,7})$/.test(regData.password))  setErrorData({...errorData, passwordError:"Passwords must be at least 8 characters long"})
        else if (!/[0-9]+/.test(regData.password)) setErrorData({...errorData, passwordError:"Passwords must contain a number"})
        else if (!/[A-Z]/.test(regData.password)) setErrorData({...errorData, passwordError:"Passwords must contain at least one uppercase letter"})
        else if (!/[a-z]/.test(regData.password)) setErrorData({...errorData, passwordError:"Passwords must contain at least one lowercase letter"})
        else if (!/[^a-zA-Z0-9]+/.test(regData.password)) setErrorData({...errorData, passwordError:"Passwords must contain at least one special character"})
        else setErrorData({...errorData, passwordError:""})
    }
    return(
        <form className="reg-form">
            {/* <BsArrowUpShort onClick={() => changeForm(false)}/> */}
            <span className="change-form" onClick={() => changeForm(false)}>Already have an account? Click here to log in!</span>
            <AuthInput errorText={errorData.emailError}>
                <input className={errorData.emailError.length > 0 ? 'input-invalid' : null} type="text" name="email" placeholder="E-mail address" value={regData.email} onChange={handleRegInput} onBlur={checkValidEmail}></input>
            </AuthInput>
            <AuthInput errorText={errorData.usernameError}>
                <input className={errorData.usernameError.length > 0 ? 'input-invalid' : null} type="text" name="username" placeholder="Username" value={regData.username} onChange={handleRegInput} onBlur={checkValidUsername}></input>
            </AuthInput>
            <AuthInput errorText={errorData.passwordError}>
                <input className={errorData.passwordError.length > 0 ? 'input-invalid' : null} type="password" name="password" placeholder="Password" value={regData.password} onChange={handleRegInput} onBlur={checkValidPassword}></input>
            </AuthInput>
            <input type="password" name="passwordAgain" placeholder="Password again" value={regData.passwordAgain} onChange={handleRegInput} onBlur={checkValidPassword}></input>
            <input type="date" name="date" value={regData.date} onChange={handleRegInput} />
            <div className="accept-license">
                <label htmlFor="rulesAccepted">I have read and agree to the <u>terms and conditions</u></label>
                <span className={"checkmark"} onClick={acceptLicense}>{rulesAccepted && <BsCheck/>}</span>  
            </div>
            <span className="error-label">{errorData.finalError}</span>      
            <button type="submit" onClick={submitRegister}>Ménj</button>
        </form>
    )
}
export default RegForm