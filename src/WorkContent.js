import React from 'react';
import HeaderParallax from './HeaderParallax';

class WorkContent extends React.Component {
  constructor(props) {
    super(props);
    this.elemRef = React.createRef();
    this.state = {
      width: 500,
      inViewport: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.magnifyingImg);
  }

  magnifyingImg = () => {
    const midViewport = window.innerHeight / 2;

    const clientRect = this.elemRef.current.getBoundingClientRect();
    const topSection = clientRect.top;
    const midSection = topSection + clientRect.height / 2;
    const bottomSection = topSection + clientRect.height;

    //Interactive with scroll
    // const distanceToSection = midViewport - midSection;

    // if (bottomSection > 0 && topSection < window.innerHeight) {
    //   this.setState({
    //     width: 800 - Math.abs(distanceToSection),
    //     inViewport: true
    //   });
    // } else {
    //   this.setState({
    //     inViewport: false,
    //     width: 600
    //   });
    // }

    if (bottomSection > midViewport && topSection < midViewport) {
      this.setState({
        width: 700,
        inViewport: true
      });
    } else {
      this.setState({
        inViewport: false,
        width: 500
      });
    }
  };

  render() {
    const { href, className, parentClass, src, header, id } = this.props;
    const { width, inViewport } = this.state;
    return (
      <div
        className='fl w-100 pa6 relative'
        key={id}
        ref={this.elemRef}
        style={{
          overflowY: 'hidden'
        }}
      >
        <div
          className={parentClass}
          style={{
            width: inViewport ? `${width}px` : '500px',
            transition: 'width 1s',
            minWidth: '500px'
          }}
          key={id}
        >
          <a href={href} className={className}>
            <img className='db w-100' src={src} alt={header} />

            <HeaderParallax header={header} />
          </a>
        </div>
      </div>
    );
  }
}

export default WorkContent;
