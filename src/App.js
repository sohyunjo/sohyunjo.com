import React from 'react';
import './css/App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Tachyons from 'tachyons/css/tachyons.min.css';

function App() {
  return (
    <div className='App relative min-h-100 w-100'>
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
