import React from 'react';
import Header from './comps/Header'
import Finder from './comps/Finder'
import NewWay from './comps/NewWay'
import Guides from './comps/Guides'
import Testimonials from './comps/Testimonials'
import Footer from './comps/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Finder />
      <NewWay />
      <Guides />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
