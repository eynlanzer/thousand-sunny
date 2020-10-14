import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
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
        <button className="header__btn--login">Login</button>
        <button className="header__btn--register">Register</button>
      </ul>
    </div>
  )
}

export default Header

