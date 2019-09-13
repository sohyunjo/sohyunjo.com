import React from 'react';
import './css/About.css';
import cat from './assets/img/cat.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='dt mw8 center pt0 pv5-m pv6-ns'>
        <div className='db dtc-ns v-mid-ns'>
          <img src={cat} alt='my portrait' className='w-100 mw9 w6-ns' />
        </div>
        <div className='db dtc-ns v-mid ph2 pr0-ns pl3-ns'>
          <h1>Full Stack Developer / NYC</h1>
          <h2>
            I specialize in creating immersive and beautiful web applications
            through clean and efficient code.
          </h2>
          <p className='lh-copy'>
            I consider myself a lifelong learner and my passion to make a
            difference in the world as a software engineer drives me to further
            study multiple modalities of computer science. I am passionate to
            learn, develop, and apply my knowledge and expand my skills through
            professional work, higher education, and personal projects.
            <br></br>I am very thorough and detail-oriented with all my work as
            I take great pride in all my creations from small to large scale
            projects. I have really enjoyed the experience of how I can enrich
            businesses and people's lives through coding and delivering projects
            from my previous professional positions. I am currently looking for
            new opportunities and I am excited to be a part of something new and
            challenging.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
