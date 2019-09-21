import React from 'react';

class HeaderParallax extends React.Component {
  constructor(props) {
    super(props);

    this.textRef = React.createRef();
    this.state = {
      yPos: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.textParallax);
  }

  textParallax = () => {
    const midViewport = window.innerHeight / 2;

    const clientRect = this.textRef.current.getBoundingClientRect();
    const topSection = clientRect.top;
    const midSection = topSection + clientRect.height / 2;
    const bottomSection = topSection + clientRect.height;

    const distanceToSection = midViewport - midSection;

    if (bottomSection > 0 && topSection < window.innerHeight) {
      this.setState({
        yPos: -distanceToSection * 0.1
      });
    }
  };

  render() {
    const { header } = this.props;
    const { yPos } = this.state;

    return (
      <div
        ref={this.h1Ref}
        className='w-100 absolute'
        style={{
          transform: `translate(-50%,${-50 + yPos}%)`,
          top: '50%',
          left: '50%',
          translate: 'transform 0.5s'
        }}
      >
        <h1 className='f-headline f-subheadline-m' ref={this.textRef}>
          {' '}
          {header}
        </h1>
      </div>
    );
  }
}

export default HeaderParallax;
