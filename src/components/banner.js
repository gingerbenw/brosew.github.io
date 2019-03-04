import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

// Images
import banner from '../images/banner3.jpg';

class Banner extends React.Component {
  navigate = (e) => {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $('#intro').offset().top - 75,
      },
      500,
    );
  };

  render() {
    return (
      <BannerWrapper
        className="banner d-flex align-items-center justify-content-center"
        role="banner"
      >
        <div className="container">
          <div className="col-xs-12">
            <div className="banner-text text-center">
              <h1>Dutch Canopies</h1>
              <p>Expertly handcrafted in the Wiltshire countryside.</p>
              <StyledLink href="#intro" onClick={this.navigate}>
                Find out more
              </StyledLink>
            </div>
          </div>
        </div>
      </BannerWrapper>
    );
  }
}
export default Banner;

const BannerWrapper = styled.section`
  background-image: url(${banner});
  background-position: center top;
  background-repeat: no-repeat;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  min-height: 650px;

  .banner-text {
    padding-top: 150px;

    h1 {
      color: #fff;
      font-family: 'Open Sans', Arial, sans-serif;
      font-size: 65px;
      font-weight: 700;
      text-transform: uppercase;
    }

    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-top: 30px;
      margin-bottom: 80px;
    }
  }
`;

const StyledLink = styled.a`
  transition: background-color 0.3s ease;
  background-color: #3bc492;
  color: #fff;
  margin-top: 30px;
  padding: 15px 30px 15px 30px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 5px;
  border: 0;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: #3d3d3d;
    color: #fff;
  }
`;
