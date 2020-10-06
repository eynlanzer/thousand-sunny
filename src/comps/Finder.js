import React from 'react';
import finderimg from '../img/thousand-01.png';

function Finder() {
  return (
    <div className="finder">
      <div className="finder__content">
        <h1 className="finder__content__text">Explore and Travel</h1>
        <h4 className="finder__content__smtext">Holiday Finder</h4>
        <hr className="finder__content__line"></hr>
        <div className="finder__content__dropdown">
          <select className="finder__content__dropdown__option">
            <option value="location">Location</option>
          </select>
          <select className="finder__content__dropdown__option">
            <option value="activity">Activity</option>
          </select>
          <select className="finder__content__dropdown__option">
            <option value="grade">Grade</option>
          </select>
          <select className="finder__content__dropdown__option">
            <option value="date">Date</option>
          </select>
        </div>
      </div>
      <img className="finder__img" src={finderimg} alt='Holiday finder img' />
    </div>
  )
}

export default Finder;
