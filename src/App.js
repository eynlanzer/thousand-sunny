import React from 'react';
import Header from './comps/Header'
import Finder from './comps/Finder'
import NewWay from './comps/NewWay'
import Guides from './comps/Guides'
import Testimonials from './comps/Testimonials'
import Trending from './comps/Trending'
import Holidays from './comps/Holidays'
import Footer from './comps/Footer'

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Finder /> */}
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
