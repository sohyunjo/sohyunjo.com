import React from 'react';
import mypic from './assets/img/mypic.jpg';
import { aboutDesc } from './data/aboutDesc';
import Typist from 'react-typist';
import Emoji from './Emoji';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    };
  }

  componentDidMount() {
    const img = new Image();
    img.src = mypic;

    img.onload = () => {
      this.setState({ imageLoaded: true });
    };
  }

  render() {
    const { imageLoaded } = this.state;
    return (
      <section className='about vh-100 w-100 ' ref={this.props.ref}>
        <div
          className='dt relative'
          style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
        >
          <div className='top-left-header absolute'>
            <h1 className='f-headline-l f-subheadline lh-solid ma0 '>
              <Typist avgTypingSpeed={40} startDelay={500}>
                {/* <Typist.Delay ms={200}> */}
                <span>SO HYUN JO</span>
                <Typist.Backspace count={10} delay={500} />
                <span>WEB DEVELOPER</span>
                {/* </Typist.Delay> */}
              </Typist>
            </h1>
            <h1 className='f-headline-l f-subheadline lh-solid ma0'>
              <span
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                FULL STACK
              </span>
            </h1>
          </div>
          <div
            className='bottom-right-header absolute right-0 bottom-0 tr'
            style={{
              transform: 'translateY(-5.5px)'
            }}
          >
            <h1 className='f-headline-l f-subheadline  lh-solid ma0'>
              <span>JO</span>
            </h1>
            <h1 className='f-headline-l f-subheadline lh-solid ma0'>
              <span
              // style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                SO HYUN
              </span>
            </h1>
          </div>
          <div className='center-text dtc v-mid tc vh-100  ph6 ph7-ns ph6-m'>
            <h2
              className='mb4 f2-l f2-m f3-ns i'
              style={{ animation: `fadein 4s 4s both` }}
            >
              I specialize in creating immersive and beautiful web applications
              through clean and efficient code. Based in{' '}
              <Emoji symbol='🗽' label='statue of liberty' />
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
