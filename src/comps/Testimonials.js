import React from 'react';
import testimonialsimg from '../img/image.png';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__review">
        <div className="testimonials__review__content">
          <h1 className="testimonials__review__title">Testimonials</h1>
          <p className="testimonials__review__rating">*****</p>
          <p className="testimonials__review__text">
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”        
          </p>
          <h4 className="testimonials__review__reviewer">Edward Newgate</h4>
          <h5 className="testimonials__review__company">Founder Circle</h5>
        </div>

        <div className="testimonials__image">
          <img className="testimonials__photo" src={testimonialsimg} alt='Testimonials section img' />      
          {/* <figcaption>
            <p>a</p>
            <p>a</p>
          </figcaption> */}
        </div>
      </div>

    </div>
  )
}

export default Testimonials;
