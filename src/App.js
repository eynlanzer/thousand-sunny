import React from 'react';

import Header from './comps/Header/index'
import Finder from './comps/Finder/index'
import NewWay from './comps/NewWay/index'
import Guides from './comps/Guides/index'
import Testimonials from './comps/Testimonials/index'
import Trending from './comps/Trending/index'
import Holidays from './comps/Holidays/index'
import Footer from './comps/Footer/index'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Finder />
      <NewWay />
      <Guides />
      <Testimonials />
      <Trending />
      <Holidays />
      <Footer />
    </div>
  );
}

export default App;
