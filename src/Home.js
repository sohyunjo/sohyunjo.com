import React from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import Works from './Works';
import About from './About';
import Header from './Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.workRef = React.createRef();
  }

  scrollToContent(ref) {
    ref.scrollIntoView();
  }
  render() {
    return (
      <div>
        <Header />
        <About ref={this.aboutRef} />
        <Works ref={this.workRef} />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default Home;
