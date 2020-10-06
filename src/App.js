import React from 'react';
import Header from './comps/Header'
import Finder from './comps/Finder'
import NewWay from './comps/NewWay'
import Guides from './comps/Guides'
import Footer from './comps/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Finder />
      <NewWay />
      <Guides />
      <Footer />
    </div>
  );
}

export default App;
