import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import LoginForm from './LoginForm'
import RegForm from "./RegForm"
import {CSSTransition, SwitchTransition} from "react-transition-group"

const AuthForm = () => {
    const [currentForm, setCurrentForm] = useState(true);
    const changeForm = form => {
        setCurrentForm(form)
    }
    return (
        <div className="auth-form">
            {currentForm ? <h1>Register</h1> : <h1>Log in</h1>}
            <SwitchTransition mode="out-in">
                <CSSTransition key={currentForm ? "reg" : "login"} classNames="form-trans" timeout={200}>
                    {currentForm ? <RegForm changeForm={changeForm}/> : <LoginForm changeForm={changeForm}/>}
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}
export default AuthForm