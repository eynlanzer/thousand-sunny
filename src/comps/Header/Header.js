import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div className="header fixedTop">
      <div className="logo">
        <div className="logo__center"></div>
      </div>

      <button className="hamburger" onClick={toggler} />
      {/* <div className="hamburger" onClick={toggler}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div> */}

      <ul className={isOpen ? "header__menu--open": "header__menu"}>
        <li className="header__menu__item" id="home"><a href="#">Home</a></li>
        <li className="header__menu__item"><a href="#">Destinations</a></li>
        <li className="header__menu__item"><a href="#">About</a></li>
        <li className="header__menu__item"><a href="#">Partner</a></li>
        <div className="header__btn">
          <button className="header__btn--login">Login</button>
          <button className="header__btn--register">Register</button>
        </div>
      </ul>

    </div>
  )
}

export default Header

