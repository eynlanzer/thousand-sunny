import React from 'react';
import "./index.scss"
import trend1 from '../../assets/trend1.png';
import trend2 from '../../assets/trend2.png';
import trend3 from '../../assets/trend3.png';
import trend4 from '../../assets/trend4.png';

const Trending = () => {
  return (
    <div className="trending">
      <div className="trending__top">
        <h1 className="trending__top__title">Trending stories</h1>
        <h5 className="trending__top__viewall">View all ></h5>
      </div>
      
      <div className="trending__pictures">
        <div className="column" style={{flexDirection: 'column'}}>
          <img className="trending__pictures__img" src={trend1} alt="Trending sroty img1"/>
          <figcaption> 
            <p className="trending__pictures__figcaption">The many benefits of taking a healing holiday</p>
            <p className="trending__pictures__smfigcaption">‘Helaing holidays’ are on the rise tohelp maximise your health and happines...</p>
            <p className="trending__pictures__readmore">Read more</p>
          </figcaption>
        </div>

        <div className="column" style={{flexDirection: 'column'}}>
          <img className="trending__pictures__img" src={trend2} alt="Trending sroty img2"/>
          <figcaption> 
            <p className="trending__pictures__figcaption">The best Kyoto restaurant to try Japanese food</p>
            <p className="trending__pictures__smfigcaption">From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit..</p>
            <p className="trending__pictures__readmore">Read more</p>
          </figcaption>
        </div>

        <div className="column" style={{flexDirection: 'column'}}>
          <img className="trending__pictures__img" src={trend3} alt="Trending sroty img3"/>
          <figcaption> 
            <p className="trending__pictures__figcaption">Skip Chichen Itza and head to this remote Yucatan</p>
            <p className="trending__pictures__smfigcaption">It’s remote and challenging to get, but braving the jungle and exploring these ruins without the...</p>
            <p className="trending__pictures__readmore">Read more</p>
          </figcaption>
        </div>

        <div className="column" style={{flexDirection: 'column'}}>
          <img className="trending__pictures__img" src={trend4} alt="Trending sroty img4"/>
          <figcaption> 
            <p className="trending__pictures__figcaption">Surf’s up at these beginner spots around the world</p>
            <p className="trending__pictures__smfigcaption">If learning to surf has in on your to- do list for a while, the good news is: it’s never too late...</p>
            <p className="trending__pictures__readmore">Read more</p>
          </figcaption>
        </div>

      </div>

    </div>
  )
}

export default Trending;
