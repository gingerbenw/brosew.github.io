import React from 'react';
import styled from 'styled-components';

class Menu extends React.Component {
  render() {
    return (
      <MenuWrapper active={this.props.showNavigation}>
        <h1>I am a menu</h1>
      </MenuWrapper>
    );
  }
}

export default Menu;

const MenuWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

	opacity: ${props => props.active ? '1' : '0'};
	pointer-events: ${props => props.active ? 'default' : 'none'};
	transition: opacity 0.3s ease;

  h1 {
    color: white;
  }
`;
