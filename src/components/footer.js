import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper className="footer" id="contact">
    <div className="footer-top section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact</h5>
            <p>
              <a href="tel:+44(0)7778701037">John | +44 (0) 7778 701 037</a>
              <br />
              <a href="tel:+44(0)7548133917">Mick | +44 (0) 7548 133 917</a>
              <br />
              <a href="mailto:info@brosew.co.uk">info@brosew.co.uk</a>
            </p>
            <p>Copyright © 2017 Brosew</p>
          </div>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  text-align: left;

  .footer-top {
    background-color: #181818;
    padding-top: 50px;
  }

  .footer-bottom {
    background-color: #313454;
    padding: 20px 0;
  }

  h5 {
    color: #fff;
    margin-bottom: 20px;
  }

  p {
    color: rgba(255, 255, 255, 0.25);
  }

  a {
    color: rgba(255, 255, 255, 0.5);

    &:hover {
			color: #00aeda;
			text-decoration: none;
    }
  }

  .footer-share {
    margin-top: 0;

    li {
      display: inline-block;
      float: none;
    }
    a {
      border: none;
      font-size: 21px;
      color: rgba(255, 255, 255, 0.25);
    }
  }
`;
