import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Home from './Home';
import { Switch, Route, Link } from 'react-router-dom';
import Tachyons from 'tachyons/css/tachyons.min.css';

function App() {
  return (
    <div className='App relative min-h-100 w-100'>
      {/* <Header /> */}
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
