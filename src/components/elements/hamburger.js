import React from 'react';
import styled from 'styled-components';

class Hamburger extends React.Component {
  render() {
    const { active, scrolled, clickHandler } = this.props;
    return (
      <HamburgerWrapper
        active={active}
        onClick={clickHandler}
        scrolled={scrolled}
      >
        <HamburgerBox active={active} scrolled={scrolled}>
          <HamburgerInner active={active} scrolled={scrolled} />
        </HamburgerBox>
      </HamburgerWrapper>
    );
  }
}

export default Hamburger;

const HamburgerWrapper = styled.div`
  z-index: 1100;
  position: fixed;
  top: ${(props) => (props.scrolled ? '18px' : '50px')};
  right: 15px;

  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter, top;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }
`;

const HamburgerBox = styled.div`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const HamburgerInner = styled.div`
  display: block;
  top: 50%;
  margin-top: -2px;
  background-color: ${(props) =>
    props.scrolled && !props.active ? 'black' : 'white'};
  width: 40px;
  height: 4px;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
  transition-duration: 0.075s;
  transition-delay: 0.12s;
  transition-timing-function: ${(props) =>
    props.active
      ? 'cubic-bezier(0.215, 0.61, 0.355, 1)'
      : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'};

  transform: ${(props) => (props.active ? 'rotate(45deg)' : '')};

  &::before,
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 4px;
    background-color: ${(props) =>
      props.scrolled && !props.active ? 'black' : 'white'};
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    top: -10px;
    ${(props) =>
      props.active
        ? `
			     top: 0;
     opacity: 0;
     transition: top 0.075s ease, opacity 0.075s 0.12s ease;	
			`
        : ``}
  }

  &::after {
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    bottom: -10px;

    ${(props) =>
      props.active
        ? `
			   bottom: 0;
    transform: rotate(-90deg);
   transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
		`
        : ``}
  }
`;
