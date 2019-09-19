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
      <section className='about' ref={this.props.ref}>
        <div className='mw9 w-80 pt5'>
          <div
            className='dt'
            style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
          >
            {/* <div
              className='db dtc-ns v-mid-ns ph3 relative'
              style={{ animation: `fadein 1.5s 0.8s both` }}
            >
              <img
                src={mypic}
                alt='my portrait'
                className='mypic w100 mw9 w6-ns h-50 hidden'
              />
            </div> */}
            <div className='db dtc-ns v-mid ph3 pr0-ns pl5-ns pl3-m'>
              {/* {aboutDesc.map((desc, delay) => (
                <desc.tag
                  className={desc.className}
                  // style={{ animation: `fadein 1s ${delay}s both` }}
                >
                  {desc.children}
                </desc.tag>
              ))} */}
              <h1 className='mb4 f-subheadline-l f1-m f-subheadline-ns relative lh-solid'>
                <Typist avgTypingSpeed={40} startDelay={1000}>
                  {/* <Typist.Delay ms={200}> */}
                  <span>So Hyun Jo</span>
                  <Typist.Backspace count={10} delay={500} />
                  <span>Full Stack Developer</span>
                  {/* </Typist.Delay> */}
                </Typist>
              </h1>
              <h2
                className='mb4 f2-l f3-m f3-ns i'
                style={{ animation: `fadein 3s 3s both` }}
              >
                I specialize in creating immersive and beautiful web
                applications through clean and efficient code. Based in{' '}
                <Emoji symbol='🗽' label='statue of liberty' />
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
