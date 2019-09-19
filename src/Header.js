import React from 'react';
import { navItem } from './data/navItem';
import NavItem from './NavItem';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    };
    // this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  toggleHover = () => {
    this.setState({ hoverItem: !this.state.hoverItem });
  };

  handleScroll = () => {
    let pixels = window.pageYOffset;

    if (pixels > 300) {
      this.setState((state, props) => {
        return { scrolled: true };
      });
    } else {
      this.setState((state, props) => {
        return { scrolled: false };
      });
    }
  };

  render() {
    const { scrolled } = this.state;

    return (
      <header
        className={`z-1 fixed w-100 pv3 tc f4 ${scrolled ? 'scrolled' : ''}`}
      >
        <nav
          //   className='flex justify-around items-center tc'
          className='dt dt--fixed center w-70 '
        >
          {navItem.map(item => (
            <NavItem {...item} />
          ))}
        </nav>
      </header>
    );
  }
}

export default Header;
