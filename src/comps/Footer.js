/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">

        <div className="footer__info">
          <div className="logo">
            <div className="logo__center"></div>
          </div>
          <p className="footer__info__about">Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
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

      <hr style={{maxWidth: '1350px', padding: 'auto'}} />
      
      <ul className="footer__icons">
        <a className="footer__icons__link">
          <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.999 2.3741C24.0253 2.78177 23.0273 3.04556 22.0536 3.16547C23.1733 2.51799 23.9036 1.58273 24.3174 0.383693C23.295 0.959233 22.1996 1.36691 21.0555 1.58273C20.0331 0.527578 18.7916 0 17.3067 0C15.8948 0 14.6777 0.503597 13.6797 1.48681C12.6816 2.47002 12.1704 3.66906 12.1704 5.05995C12.1704 5.44365 12.2191 5.82734 12.2921 6.21103C10.1986 6.11511 8.22688 5.58753 6.40117 4.65228C4.57546 3.71703 3.01753 2.47002 1.72736 0.935252C1.26485 1.72662 1.02142 2.56595 1.02142 3.47722C1.02142 4.34053 1.21617 5.15588 1.62999 5.8753C2.04382 6.6187 2.6037 7.21823 3.2853 7.67386C2.45765 7.64988 1.67868 7.43405 0.972738 7.02638V7.09832C0.972738 8.32134 1.36222 9.3765 2.14119 10.3118C2.92016 11.223 3.89387 11.8225 5.08666 12.0623C4.64849 12.1823 4.18598 12.2302 3.74781 12.2302C3.4557 12.2302 3.13924 12.2062 2.7741 12.1583C3.09056 13.1655 3.69913 14.0048 4.57546 14.6523C5.4518 15.2998 6.44986 15.6355 7.56962 15.6595C5.71957 17.0983 3.57741 17.8177 1.21617 17.8177C0.753654 17.8177 0.339827 17.7938 -0.0253143 17.7458C2.36028 19.2566 4.98929 20 7.83739 20C9.6631 20 11.3671 19.7122 12.9737 19.1607C14.5803 18.5851 15.9435 17.8417 17.0633 16.8825C18.1831 15.9233 19.1811 14.8201 19.9844 13.5971C20.8121 12.3501 21.4206 11.0552 21.8101 9.71223C22.1996 8.3693 22.4187 7.0024 22.4187 5.65947C22.4187 5.3717 22.4187 5.15588 22.3944 5.01199C23.4411 4.26858 24.2931 3.40528 24.999 2.3741Z" fill="black"/>
          </svg>
        </a>
        <a className="footer__icons__link">
          <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.64671 7.21043V5.3054C6.64671 5.01862 6.66667 4.7933 6.68663 4.64991C6.70659 4.48603 6.76647 4.34264 6.86627 4.19925C6.96607 4.05587 7.10579 3.95344 7.30539 3.89199C7.50499 3.83054 7.78443 3.81006 8.12375 3.81006H9.98004V0H7.00599C5.28942 0 4.07186 0.409683 3.33333 1.24953C2.59481 2.08939 2.21557 3.29795 2.21557 4.93669V7.21043H0V11H2.21557V22H6.64671V11H9.6008L10 7.21043H6.64671Z" fill="black"/>
          </svg>
        </a>
        <a className="footer__icons__link">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9305 0H6.06953C2.71746 0 0 2.71746 0 6.06953V15.9305C0 19.2825 2.71746 22 6.06953 22H15.9305C19.2825 22 22 19.2825 22 15.9305V6.06953C22 2.71746 19.2825 0 15.9305 0ZM20.0473 15.9305C20.0473 18.2086 18.1923 20.0473 15.9305 20.0473H6.06953C3.79142 20.0473 1.95266 18.1923 1.95266 15.9305V6.06953C1.95266 3.80769 3.80769 1.95266 6.06953 1.95266H15.9305C18.2086 1.95266 20.0473 3.80769 20.0473 6.06953V15.9305Z" fill="black"/>
            <path d="M11 5.33728C7.87573 5.33728 5.321 7.87574 5.321 11C5.321 14.1243 7.85946 16.679 11 16.679C14.1243 16.679 16.679 14.1405 16.679 11C16.679 7.87574 14.1243 5.33728 11 5.33728ZM11 14.7263C8.94969 14.7263 7.27366 13.0666 7.27366 11.0163C7.28993 8.94971 8.94969 7.28994 11 7.28994C13.0503 7.28994 14.7263 8.94971 14.7263 11C14.7263 13.0503 13.0503 14.7263 11 14.7263Z" fill="black"/>
            <path d="M16.9068 3.67749C16.5325 3.67749 16.1583 3.82394 15.8979 4.10057C15.6376 4.36092 15.4748 4.73518 15.4748 5.10944C15.4748 5.4837 15.6213 5.85796 15.8979 6.11832C16.1583 6.37867 16.5325 6.5414 16.9068 6.5414C17.2811 6.5414 17.6553 6.39495 17.9157 6.11832C18.176 5.85796 18.3388 5.4837 18.3388 5.10944C18.3388 4.73518 18.1923 4.36092 17.9157 4.10057C17.6553 3.82394 17.2973 3.67749 16.9068 3.67749Z" fill="black"/>
          </svg>
        </a>
        <a className="footer__icons__link">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.21578 7.14941H0.275716V22H5.21578V7.14941Z" fill="black"/>
            <path d="M21.4376 8.50571C20.4036 7.37928 19.025 6.80457 17.3247 6.80457C16.7043 6.80457 16.1299 6.87353 15.6014 7.03445C15.0959 7.19537 14.6593 7.40227 14.2917 7.67813C13.947 7.95399 13.6483 8.20686 13.4416 8.45974C13.2348 8.68962 13.0509 8.9425 12.8671 9.24135V7.1264H7.95004L7.97302 7.83905C7.97302 8.32181 7.996 9.79307 7.996 12.2758C7.996 14.7586 7.996 17.977 7.97302 21.977H12.8901V13.7011C12.8901 13.1954 12.9361 12.7816 13.0509 12.4827C13.2577 11.977 13.5794 11.5402 13.993 11.1954C14.4066 10.8505 14.9351 10.6896 15.5784 10.6896C16.4286 10.6896 17.0719 10.9885 17.4625 11.5862C17.8761 12.1839 18.0599 13.0115 18.0599 14.0459V21.977H22.977V13.4712C23 11.2873 22.4945 9.63215 21.4376 8.50571Z" fill="black"/>
            <path d="M2.78022 0C1.95305 0 1.28671 0.252874 0.781219 0.735632C0.252747 1.21839 0 1.81609 0 2.55172C0 3.28736 0.252747 3.88506 0.758242 4.39081C1.26374 4.87356 1.90709 5.12644 2.73427 5.12644H2.75724C3.60739 5.12644 4.27373 4.87356 4.77922 4.39081C5.28472 3.90805 5.53746 3.28736 5.53746 2.55172C5.53746 1.81609 5.26174 1.1954 4.77922 0.712644C4.27373 0.252874 3.60739 0 2.78022 0Z" fill="black"/>
          </svg>
        </a>
        <a className="footer__icons__link">
          <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.9856 7.64988C27.9856 7.09832 27.9376 6.3789 27.8417 5.51559C27.7698 4.65228 27.6499 3.88489 27.506 3.21343C27.3381 2.44604 26.9784 1.82254 26.4269 1.29496C25.8753 0.767386 25.2278 0.479616 24.4844 0.383693C22.1823 0.119904 18.6811 0 14.0048 0C9.32854 0 5.82734 0.119904 3.52518 0.383693C2.78177 0.479616 2.13429 0.767386 1.58273 1.29496C1.03118 1.82254 0.671463 2.44604 0.503597 3.21343C0.335731 3.88489 0.239808 4.65228 0.143885 5.51559C0.0719424 6.3789 0.0239808 7.09832 0 7.64988C0 8.22542 0 8.99281 0 10C0 11.0072 0 11.7746 0.0239808 12.3501C0.0239808 12.9017 0.0719424 13.6211 0.167866 14.4844C0.215827 15.3477 0.335731 16.1151 0.479616 16.7866C0.647482 17.554 1.00719 18.1775 1.55875 18.705C2.11031 19.2326 2.75779 19.5204 3.5012 19.6163C5.80336 19.8801 9.30456 20 13.9808 20C18.6571 20 22.1583 19.8801 24.4604 19.6163C25.2038 19.5444 25.8513 19.2326 26.4029 18.705C26.9544 18.1775 27.3141 17.554 27.482 16.7866C27.6499 16.1151 27.7458 15.3477 27.8417 14.4844C27.9137 13.6211 27.9616 12.9017 27.9856 12.3501C27.9856 11.7986 28.0096 11.0072 28.0096 10C28.0096 8.99281 28.0096 8.22542 27.9856 7.64988ZM19.5444 10.8393L11.5348 15.8513C11.3909 15.9472 11.223 16.0192 11.0072 16.0192C10.8393 16.0192 10.6954 15.9712 10.5276 15.8993C10.1918 15.7074 10 15.4197 10 15.012V5.01199C10 4.60432 10.1679 4.31655 10.5276 4.1247C10.8873 3.93285 11.223 3.95683 11.5348 4.14868L15.5396 6.65468L19.5444 9.16067C19.8561 9.32854 20.024 9.61631 20.024 10C20 10.3837 19.8561 10.6715 19.5444 10.8393Z" fill="black"/>
          </svg>
        </a>
      </ul>

    </div>
  )
}

export default Footer;
