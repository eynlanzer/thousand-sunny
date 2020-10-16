import React, { useState } from 'react';
import "./index.scss"
import "../Logo/index.scss"
import "../../containers/Login/index.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  const toggler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  const toggleLogin = () => {
    loginPage ? setLoginPage(false) : setLoginPage(true);
    setIsOpen(false);
  }

  return (
    <div className="header">
      <div className="logo">
        <div className="logo__center"></div>
      </div>

      <div className="hamburger" onClick={toggler}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>

      <ul className={isOpen ? "header__menu--open" : "header__menu"}>
        <button className="header__menu--close" onClick={toggler}>X</button>
        <li className="header__menu__item" id="home"><a href="#">Home</a></li>
        <li className="header__menu__item"><a href="#">Destinations</a></li>
        <li className="header__menu__item"><a href="#">About</a></li>
        <li className="header__menu__item"><a href="#">Partner</a></li>
        {/* <button className="header__btn--login">Login</button> */}
        <button className="header__btn--login" onClick={toggleLogin}>Login</button>
        
        <div className={loginPage ? "loginForm--open" : "loginForm"}>
          <form className={loginPage ? "loginForm__container--visible" : "loginForm__container"}>
            {/* <svg onClick={toggleLogin} className="loginForm--close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.000151038 14.1426L14.1423 0.000442743L15.5565 1.41466L1.41436 15.5568L0.000151038 14.1426Z" fill="#B4D51E"/>
              <path d="M1.41421 0L15.5563 14.1421L14.1421 15.5563L0 1.41421L1.41421 0Z" fill="#B4D51E"/>
            </svg> */}
            <svg onClick={toggleLogin} className="loginForm--close" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B4D51E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>

            <h1 className="loginForm__title">Login</h1>
            <p className="loginForm__greeting">Boa tarde! Ficamos felizes em tê-lo conosco.</p>
            <input className="loginForm__input" type="text" placeHolder="Email"/>
            <input className="loginForm__input" type="password" placeHolder="Senha"/>
            <div className="loginForm__actions">
              <a href='#'>
                <p className="loginForm__actions__link">Quero uma conta
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </p>
              </a>
              <button className="loginForm__actions__btn">
                Entrar
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                {/* <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L7 7L0.999999 1" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> */}
              </button>
            </div>
          </form>
        </div>

        <button className="header__btn--register">Register</button>
      </ul>
    </div>
  )
}

export default Header

