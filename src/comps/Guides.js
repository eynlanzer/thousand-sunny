import React from 'react'
import guidesimg from '../img/thousand-03.png';

const Guides = () => {
  return (
    <div className="guides">
      <div className="guides__content">
        <h1 className="guides__content__title">Guides by Thousand<span style={{display: 'block'}}>Sunny</span></h1>
        <p className="guides__content__text">
          Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.
        </p>
        <button className="guides__content__btn">Download</button>
      </div>

      <img className="guides__img" src={guidesimg} alt='Guides section img' />
    </div>
  )
}

export default Guides;
