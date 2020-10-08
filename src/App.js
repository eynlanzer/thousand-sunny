import React from 'react';
import Header from './comps/Header/Header'
import Finder from './comps/Finder/Finder'
import NewWay from './comps/NewWay/NewWay'
import Guides from './comps/Guides/Guides'
import Testimonials from './comps/Testimonials/Testimonials'
import Trending from './comps/Trending/Trending'
import Holidays from './comps/Holidays/Holidays'
import Footer from './comps/Footer/Footer'

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
