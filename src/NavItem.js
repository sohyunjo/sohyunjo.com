import React from 'react';
import logoimg from './assets/img/logo.png';
import { NavLink } from 'react-router-dom';

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverItem: false
    };
  }

  toggleHover = () => {
    this.setState({ hoverItem: !this.state.hoverItem });
  };

  render() {
    const { hoverItem } = this.state;
    const { logo, className, children, href, exact } = this.props;

    return (
      <div className='dtc v-mid'>
        <NavLink
          className={`${className} ${hoverItem ? 'highlight-aqua' : ''}`}
          to={href}
          exact={exact}
          title={children}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          activeClassName='active highlight-aqua'
        >
          {logo ? (
            <img className='logo-img' src={logoimg} />
          ) : (
            <span className='z-2'>{children}</span>
          )}
        </NavLink>
      </div>
    );
  }
}

export default NavItem;
