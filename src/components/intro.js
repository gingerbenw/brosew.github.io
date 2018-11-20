import React from "react";
import styled from "styled-components";

const Intro = () => (
  <IntroWrapper id="intro" className="section intro">
    <div className="container py-5">
      <div className="col-12 py-5 text-center">
        <h3>Why choose a Brosew dutch canopy?</h3>
      </div>
    </div>
  </IntroWrapper>
);

export default Intro;

const IntroWrapper = styled.section`
  background-color: #00aeda;

  h3 {
    color: #fff;
    margin-top: 0;
  }
`;
