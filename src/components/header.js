import React from 'react';
import styled from 'styled-components';

// Components
import Menu from './elements/menu';
import Hamburger from './elements/hamburger';
// import Button from './elements/button';

class Header extends React.Component {
  state = {
    showNavgation: false,
    scrolled: false,
    mobile: true,
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    this.handleScroll();
    this.handleResize();
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  };

  handleScroll = () => {
    const scrolled = window.scrollY > 50;
    scrolled !== this.state.scrolled && this.setState({ scrolled });
  };

  handleResize = () => {
    const mobile = window.innerWidth < 768;
    mobile !== this.state.mobiel && this.setState({ mobile });
  };

  toggleNavigation = () =>
    this.setState({ showNavigation: !this.state.showNavigation });

  render() {
    const { mobile, scrolled, showNavigation } = this.state;
    return (
      <React.Fragment>
        <HeaderWrapper active={scrolled}>
          <div className="header-content clearfix">
            <a className="logo" href="/">
              Brosew
            </a>
            {!mobile ? (
              <Navigation role="navigation" active={scrolled}>
                <ul className="primary-nav mb-0">
                  <li>
                    <a href="#intro">About</a>
                  </li>
                  <li>
                    <a href="#services">services</a>
                  </li>
                  <li>
                    <a href="#works">Works</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </Navigation>
            ) : (
              <Hamburger
                clickHandler={this.toggleNavigation}
                active={showNavigation}
                scrolled={scrolled}
              />
            )}
          </div>
        </HeaderWrapper>
        <Menu showNavigation={showNavigation} />
      </React.Fragment>
    );
  }
}

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  z-index: 999;

  background-color: ${(props) => (props.active ? 'white' : 'transparent')};

  .header-content {
    padding: ${(props) => (props.active ? '25px 2.5rem' : '60px 2.5rem')};
    -moz-transition: padding 0.3s;
    -o-transition: padding 0.3s;
    -webkit-transition: padding 0.3s;
    transition: padding 0.3s;

    margin: 0 auto;
    max-width: 1170px;
    width: 100%;
  }

  .logo {
    float: left;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => (props.active ? 'black' : 'white')};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 7px;
  }
`;

const Navigation = styled.nav`
  float: right;
  line-height: 35px;

  &.open {
    opacity: 0.9;
    visibility: visible;
    -moz-transition: opacity 0.5s;
    -o-transition: opacity 0.5s;
    -webkit-transition: opacity 0.5s;
    transition: opacity 0.5s;
  }

  li {
    display: inline-block;
  }

  a {
    color: ${(props) =>
      props.active ? 'rgba(0, 0, 0, 0.75);' : 'rgba(255, 255, 255, 0.75);'};

    font-size: 13px;
    font-weight: 700;
    margin-left: 40px;
    text-transform: uppercase;

    &:hover {
      color: ${(props) => (props.active ? 'black' : 'white')};
    }
  }
`;
