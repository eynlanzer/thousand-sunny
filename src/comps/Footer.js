import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <div className="logo">
            <div className="logo__orange"></div>
          </div>
          <p className="footer__info__about">Plan and book your perfect trip with <span style={{display:'block'}}>expert advice, travel tips destination</span> information from us</p>
          <p className="footer__info__copyright">©2020 Thousand Sunny. All rights reserved</p>
        </div>
        <ul className="footer__menu">
          <p className="footer__menu__title">Destiantions</p>
          <a class="footer__menu__link" href="#"><li>Africa</li></a>
          <a class="footer__menu__link" href="#"><li>Antarctica</li></a>
          <a class="footer__menu__link" href="#"><li>Asia</li></a>
          <a class="footer__menu__link" href="#"><li>Europe</li></a>
          <a class="footer__menu__link" href="#"><li>America</li></a>
        </ul>
        
        <ul className="footer__menu">
          <p className="footer__menu__title">Shop</p>
          <a class="footer__menu__link" href="#"><li>Destinations Guide</li></a>
          <a class="footer__menu__link" href="#"><li>Pictorial & Gifts</li></a>
          <a class="footer__menu__link" href="#"><li>Asia</li></a>
          <a class="footer__menu__link" href="#"><li>Europe</li></a>
          <a class="footer__menu__link" href="#"><li>America</li></a>
        </ul>

        <ul className="footer__menu">
          <p className="footer__menu__title">Interests</p>
          <a class="footer__menu__link" href="#"><li>Adventure Travel</li></a>
          <a class="footer__menu__link" href="#"><li>Art And Culture</li></a>
          <a class="footer__menu__link" href="#"><li>Wildlife And Nature</li></a>
          <a class="footer__menu__link" href="#"><li>Family Holidays</li></a>
          <a class="footer__menu__link" href="#"><li>Food And Drink</li></a>
        </ul>

      </div>
      <hr style={{width: '1350px'}} />

      <ul className="footer__icons">
        <li className="footer__icons__item"><a className="footer__icon" href="#"><i className="fab fa-twitter fa-3x"></i></a></li>
        <li className="footer__icons__item"><a className="footer__icon" href="#"><i className="fab fa-facebook-f fa-3x"></i></a></li>
        <li className="footer__icons__item"><a className="footer__icon" href="#"><i className="fab fa-instagram fa-3x"></i></a></li>
        <li className="footer__icons__item"><a className="footer__icon" href="#"><i className="fab fa-linkedin fa-3x"></i></a></li>
        <li className="footer__icons__item"><a className="footer__icon" href="#"><i className="fab fa-youtube fa-3x"></i></a></li>
      </ul>

    </div>
  )
}

export default Footer;
