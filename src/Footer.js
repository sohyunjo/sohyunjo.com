import React from 'react';
import { linkedin } from './assets/icons/linkedin.svg';
import { github } from './assets/icons/github.svg';
import { music } from './assets/icons/music.svg';
import { react } from './assets/icons/react.svg';
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // all the way on the bottom
      // <footer className='wrapper z1 bottom-0 absolute'>
      <footer
        className='fixed bottom-0 left-0 ml5 mr5 black-50   '
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed'
          // transform: 'rotate(180deg)'

          // transform: 'translateY(50%)'
        }}
      >
        {/* <div className='korean'>
          <img className='w-60-l w-60-m w-60' src={two} />
        </div> */}
        <div className='copyright' class='f4'>
          <span className='hover-light-purple'>© So Hyun Jo</span> /
          {/* <span class='hover-gold'> Built with React and Coffee </span>{' '} */}
          {/* /<span class='black-80 hover-green'> Privacy </span> / */}
          {/* <a class='link hover-green' href='mailto:hi@sohyunjo.com'>
            {' '}
            hi@sohyunjo.com{' '}
          </a> */}
        </div>

        <div className='social-media'>{linkedin}</div>
      </footer>
    );
  }
}

export default Footer;
