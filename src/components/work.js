import React from "react";
import styled from "styled-components";

// Images
import work1 from "../images/work-1.jpg";
import work2 from "../images/work-2.jpg";
import work3 from "../images/work-3.jpg";
import work4 from "../images/work-4.jpg";

const Work = () => (
  <WorkWrapper id="works" className="works section no-padding">
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-lg-3 col-md-6 col-sm-6 work">
          <a href={work1} className="work-box">
            <img src={work1} alt="" />
            <div className="overlay">
              <div className="overlay-caption">
                <h5>Yellow Striped</h5>
                <p>Dutch Canopy</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 work">
          <a href={work2} className="work-box">
            <img src={work2} alt="" />
            <div className="overlay">
              <div className="overlay-caption">
                <h5>Blue Striped</h5>
                <p>Dutch Canopy</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 work">
          <a href={work3} className="work-box">
            <img src={work3} alt="" />
            <div className="overlay">
              <div className="overlay-caption">
                <h5>Retracted</h5>
                <p>Red Canopy</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 work">
          <a href={work4} className="work-box">
            <img src={work4} alt="" />
            <div className="overlay">
              <div className="overlay-caption">
                <h5>Just a sample</h5>
                <p>Of many available materials</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </WorkWrapper>
);

export default Work;

const WorkWrapper = styled.section`
  -moz-box-shadow: 0 0 0 1px #fff;
  -webkit-box-shadow: 0 0 0 1px #fff;
  box-shadow: 0 0 0 1px #fff;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
  .overlay {
    background: rgba(0, 174, 218, 0.9);
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    -moz-transition: opacity, 0.3s;
    -o-transition: opacity, 0.3s;
    -webkit-transition: opacity, 0.3s;
    transition: opacity, 0.3s;
  }
  .overlay-caption {
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  h5,
  p,
  img {
    -moz-transition: all, 0.5s;
    -o-transition: all, 0.5s;
    -webkit-transition: all, 0.5s;
    transition: all, 0.5s;
  }

  h5,
  p {
    color: #fff;
    margin: 0;
    opacity: 0;
  }

  span {
    font-size: 45px;
  }
  h5 {
    margin-bottom: 5px;
    -moz-transform: translate3d(0, -200%, 0);
    -ms-transform: translate3d(0, -200%, 0);
    -webkit-transform: translate3d(0, -200%, 0);
    transform: translate3d(0, -200%, 0);
  }
  p {
    -moz-transform: translate3d(0, 200%, 0);
    -ms-transform: translate3d(0, 200%, 0);
    -webkit-transform: translate3d(0, 200%, 0);
    transform: translate3d(0, 200%, 0);
  }
  .work-box:hover img {
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  .work-box:hover .overlay {
    opacity: 1;
  }
  .work-box:hover .overlay h5,
  .work-box:hover .overlay p {
    opacity: 1;
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
