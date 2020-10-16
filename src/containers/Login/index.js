import React, { useState } from 'react'

const Login = () => {
  const [loginPage, setLoginPage] = useState(false);

  const toggleLogin = () => {
    loginPage ? setLoginPage(false) : setLoginPage(true);
  }

  return (
    <div className="login">
      <form className={loginPage ? "login__form--open" : "login__form"}>
        <svg className="login__form--close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.000151038 14.1426L14.1423 0.000442743L15.5565 1.41466L1.41436 15.5568L0.000151038 14.1426Z" fill="#B4D51E"/>
          <path d="M1.41421 0L15.5563 14.1421L14.1421 15.5563L0 1.41421L1.41421 0Z" fill="#B4D51E"/>
        </svg>

        <h1 className="login__form__title">Login</h1>
        <p className="login__form__greeting">Bom dia! Ficamos felizes em tê-lo conosco.</p>
        <input className="login__form__input" type="text" placeHolder="E-mail:"/>
        <input className="login__form__input" type="password" placeHolder="Password"/>
     </form>
    </div>
  )
}

export default Login
