import React from 'react'
import holiday1 from '../img/holiday1.png';
import holiday2 from '../img/holiday2.png';
import holiday3 from '../img/holiday3.png';
import holiday4 from '../img/holiday4.png';

const Holidays = () => {
  return (
    <div className="holidays">
      <div className="holidays__top">
        <h1 className="holidays__top__title">Holidays stories</h1>
        <h5 className="holidays__top__viewall">View all ></h5>
      </div>
      
      <div className="holidays__pictures">
        <div className="overlay">
          <img className="holidays__pictures__img" src={holiday1} alt="Holidays sroty img1"/>
          <figcaption> 
            <p className="holidays__pictures__city">Raja Ampat</p>
            <p className="holidays__pictures__country">Indonesia</p>
          </figcaption>
        </div>

        <div className="overlay">
          <img className="holidays__pictures__img" src={holiday2} alt="Holidays sroty img1"/>
          <figcaption> 
            <p className="holidays__pictures__city">Fanjingshan</p>
            <p className="holidays__pictures__country">China</p>
          </figcaption>
        </div>

        <div className="overlay">
          <img className="holidays__pictures__img" src={holiday3} alt="Holidays sroty img1"/>
          <figcaption> 
            <p className="holidays__pictures__city">Vevey</p>
            <p className="holidays__pictures__country">Switzerland</p>
          </figcaption>
        </div>

        <div className="overlay">
          <img className="holidays__pictures__img" src={holiday4} alt="Holidays sroty img1"/>
          <figcaption> 
            <p className="holidays__pictures__city">Skadar</p>
            <p className="holidays__pictures__country">Montenegro</p>
          </figcaption>
        </div>
      </div>
    </div>
  )
}

export default Holidays
