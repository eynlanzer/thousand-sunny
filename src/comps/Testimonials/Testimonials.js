import React from 'react';
import testimonialsimg from '../../assets/image.png';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__review">
        <div className="testimonials__review__content">
          <h1 className="testimonials__review__title">Testimonials</h1>
          <div className="testimonials__review__rating">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5854 20.0488L18.5854 23.7073C19.7561 24.439 21.0732 23.4146 20.7805 22.0976L19.1708 15.2195L24.5854 10.5366C25.6098 9.65854 25.0244 8.04878 23.7073 7.90244L16.683 7.31707L13.9025 0.878049C13.3171 -0.292683 11.7073 -0.292683 11.122 0.878049L8.34149 7.46341L1.3171 8.04878C2.73548e-05 8.04878 -0.438997 9.65854 0.439052 10.5366L5.85369 15.2195L4.24393 22.0976C3.95125 23.4146 5.26832 24.2927 6.43905 23.7073L12.5854 20.0488Z" fill="#FFBB0C"/>
            </svg>
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5854 20.0488L18.5854 23.7073C19.7561 24.439 21.0732 23.4146 20.7805 22.0976L19.1708 15.2195L24.5854 10.5366C25.6098 9.65854 25.0244 8.04878 23.7073 7.90244L16.683 7.31707L13.9025 0.878049C13.3171 -0.292683 11.7073 -0.292683 11.122 0.878049L8.34149 7.46341L1.3171 8.04878C2.73548e-05 8.04878 -0.438997 9.65854 0.439052 10.5366L5.85369 15.2195L4.24393 22.0976C3.95125 23.4146 5.26832 24.2927 6.43905 23.7073L12.5854 20.0488Z" fill="#FFBB0C"/>
            </svg>
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5854 20.0488L18.5854 23.7073C19.7561 24.439 21.0732 23.4146 20.7805 22.0976L19.1708 15.2195L24.5854 10.5366C25.6098 9.65854 25.0244 8.04878 23.7073 7.90244L16.683 7.31707L13.9025 0.878049C13.3171 -0.292683 11.7073 -0.292683 11.122 0.878049L8.34149 7.46341L1.3171 8.04878C2.73548e-05 8.04878 -0.438997 9.65854 0.439052 10.5366L5.85369 15.2195L4.24393 22.0976C3.95125 23.4146 5.26832 24.2927 6.43905 23.7073L12.5854 20.0488Z" fill="#FFBB0C"/>
            </svg>
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5854 20.0488L18.5854 23.7073C19.7561 24.439 21.0732 23.4146 20.7805 22.0976L19.1708 15.2195L24.5854 10.5366C25.6098 9.65854 25.0244 8.04878 23.7073 7.90244L16.683 7.31707L13.9025 0.878049C13.3171 -0.292683 11.7073 -0.292683 11.122 0.878049L8.34149 7.46341L1.3171 8.04878C2.73548e-05 8.04878 -0.438997 9.65854 0.439052 10.5366L5.85369 15.2195L4.24393 22.0976C3.95125 23.4146 5.26832 24.2927 6.43905 23.7073L12.5854 20.0488Z" fill="#FFBB0C"/>
            </svg>
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5854 20.0488L18.5854 23.7073C19.7561 24.439 21.0732 23.4146 20.7805 22.0976L19.1708 15.2195L24.5854 10.5366C25.6098 9.65854 25.0244 8.04878 23.7073 7.90244L16.683 7.31707L13.9025 0.878049C13.3171 -0.292683 11.7073 -0.292683 11.122 0.878049L8.34149 7.46341L1.3171 8.04878C2.73548e-05 8.04878 -0.438997 9.65854 0.439052 10.5366L5.85369 15.2195L4.24393 22.0976C3.95125 23.4146 5.26832 24.2927 6.43905 23.7073L12.5854 20.0488Z" fill="#FFBB0C"/>
            </svg>
          </div>
          <p className="testimonials__review__text">
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”        
          </p>
          <h4 className="testimonials__review__reviewer">Edward Newgate</h4>
          <h5 className="testimonials__review__company">Founder Circle</h5>
        </div>

        <div className="testimonials__image">
          <img className="testimonials__photo" src={testimonialsimg} alt='Testimonials section img' />      
          <figcaption>
            <button className="testimonials__image__previousBtn">{"<"}</button>
            <button className="testimonials__image__nextBtn">{">"}</button>
          </figcaption>
        </div>
      </div>

    </div>
  )
}

export default Testimonials;
