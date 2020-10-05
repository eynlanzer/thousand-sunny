import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo__orange"></div>
      </div>
      <ul className="header__menu">
        <li className="header__menu__item" id="home"><a href="#">Home</a></li>
        <li className="header__menu__item"><a href="#">Destinations</a></li>
        <li className="header__menu__item"><a href="#">About</a></li>
        <li className="header__menu__item"><a href="#">Partner</a></li>
        <div className="header__btn">
          <button className="header__btn__white">Login</button>
          <button className="header__btn__orange">Register</button>
        </div>
      </ul>
    </div>
  )
}

export default Header
