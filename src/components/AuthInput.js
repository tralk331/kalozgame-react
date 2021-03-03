import React from 'react'

const AuthInput = (props) => {
    return(
        <div className="auth-input">
            {props.children}
            {props.errorText !== "" && <span className="error-label">{props.errorText}</span>}
        </div>
    )
}
export default AuthInput