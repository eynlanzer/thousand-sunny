import React from 'react'
import newwayimg from '../../assets/thousand-02.png';

const NewWay = () => {
  return (
    <div className="newway">
      <div className="newway__content">
        <h1 className="newway__content__title">A new way to explore the world</h1>
        <p className="newway__content__text">
          For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way
        </p>
        <button className="newway__content__btn">Learn More</button>      
      </div>

      <img className="newway__img" src={newwayimg} alt='New way section img' />
    </div>
  )
}

export default NewWay;