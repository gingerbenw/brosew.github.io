import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

const menuItems = [
  {
    link: '#intro',
    text: 'About',
  },
  {
    link: '#services',
    text: 'Services',
  },
  {
    link: '#works',
    text: 'Works',
  },
  {
    link: '#contact',
    text: 'Contact',
  },
];

class Menu extends React.Component {
  navigate = (link) => {
    $('html, body').animate(
      {
        scrollTop: $(link).offset().top - 75,
      },
      500,
    );
    this.props.clickHandler();
  };

  render() {
    return (
      <MenuWrapper active={this.props.showNavigation}>
        {menuItems.map((item) => (
          <a
            key={item.text}
            href={item.link}
            onClick={() => this.navigate(item.link)}
          >
            <h1>{item.text}</h1>
          </a>
        ))}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: ${(props) => (props.active ? '1' : '0')};
  pointer-events: ${(props) => (props.active ? 'default' : 'none')};
  transition: opacity 0.3s ease;

  a {
    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }

  h1 {
    color: white;
    margin: 1rem 0;
  }
`;
