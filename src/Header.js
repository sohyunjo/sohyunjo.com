import React from 'react';
import logoimg from './assets/img/logo.png';
import { navItem } from './data/navItem';
import './css/Header.css';

const NavItem = ({ className, href, children, logo }) => {
  return (
    <div className='dtc v-mid'>
      <a className={className} href={href} title={children}>
        {logo ? <img className='logo-img' src={logoimg} /> : children}
      </a>
    </div>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll() {
    let pixels = window.pageYOffset;
    const w = window.innerWidth;

    if (pixels > 300) {
      this.setState((state, props) => {
        return { scrolled: true };
      });
    } else {
      this.setState((state, props) => {
        return { scrolled: false };
      });
    }
  }

  render() {
    const { scrolled } = this.state;

    return (
      <header className='z1 fixed w-100 pv3 tc'>
        <nav
          //   className='flex justify-around items-center tc'
          className='dt collapse center w-70 '
          //   className={`fixed db dt-l w-100 border-box pa2 ph5-l ${
          //     scrolled ? 'scrolled' : ''
          //   }`}
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
