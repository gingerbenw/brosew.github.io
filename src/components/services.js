import React from 'react';
import styled from 'styled-components';

const Services = () => (
  <ServicesWrapper id="services" className="services service-section">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 services text-center">
          <i className="fas fa-screwdriver fa-3x" />
          <div className="services-content">
            <h5>Installation service</h5>
            <p>
              Pickup and DIY, or delivered to your door and installed by our
              expert fitters!
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 services text-center">
          <i className="fas fa-pencil-ruler fa-3x" />
          <div className="services-content">
            <h5>made to measure</h5>
            <p>
              Designed from the ground up for your needs, with a variety of
              designs, materials and sizes to choose from.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 services text-center">
          <i className="fas fa-tv fa-3x" />
          <div className="services-content">
            <h5>multipurpose</h5>
            <p>
              Stop glare on your TV screen, let the warmth in, and enjoy your
              own garden without the sunburn.
            </p>
          </div>
        </div>
      </div>
    </div>
  </ServicesWrapper>
);

export default Services;

const ServicesWrapper = styled.section`
  padding-top: 100px;
  margin-bottom: 50px;

  .services-content {
    padding: 0 15px;
    margin-top: 30px;
  }

  .icon {
    color: #00aeda;
    font-size: 50px;
    padding-left: 15px;
  }

  i {
    color: #00aeda;
  }

  h5 {
    font-size: 14px;
    color: #2d3033;
    text-transform: uppercase;
    font-weight: 700;
  }

  p {
    font-size: 13px;
    line-height: 22.4px;
    color: #6c7279;
  }
`;
