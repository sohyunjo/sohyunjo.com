import React from 'react';
import './css/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='wrapper z1 bottom-0 absolute'>
        <div className='korean'>ㅈㅅㅎ</div>
        <div className='copyright'></div>
        <div className='social-media'></div>
      </footer>
    );
  }
}

export default Footer;
