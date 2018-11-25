import React from 'react';
import styled from 'styled-components';

// Images
import work1 from '../images/work-1.jpg';
import work2 from '../images/work-2.jpg';
import work3 from '../images/work-3.jpg';
import work4 from '../images/work-4.jpg';

const images = [
  {
    src: work1,
    title: 'Yellow Striped',
    description: 'Dutch canopy',
  },
  {
    src: work2,
    title: 'Blue Striped',
    description: 'Dutch canopy',
  },
  {
    src: work3,
    title: 'Retracted',
    description: 'Dutch canopy',
  },
  {
    src: work4,
    title: 'Just a sample',
    description: 'Of many available materials',
  },
];

class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedImage: work1,
      isOpen: false,
    };
  }

  handleShowImage = (e, selectedImage) => {
    e.preventDefault();
    this.toggleLightbox();
    this.setState({ selectedImage });
  };

  toggleLightbox = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen, selectedImage } = this.state;
    return (
      <React.Fragment>
        <WorkWrapper id="works" className="works section no-padding">
          <div className="container-fluid">
            <div className="row no-gutter">
              {images &&
                images.map((image) => (
                  <WorkItem
                    key={image.title}
                    className="col-lg-3 col-md-6 col-sm-6 work"
                  >
                    <a
                      href={image.src}
                      className="work-box"
                      onClick={(e) => this.handleShowImage(e, image.src)}
                    >
                      <img src={image.src} alt={image.description} />
                      <div className="overlay">
                        <div className="overlay-caption">
                          <h5>{image.title}</h5>
                          <p>{image.description}</p>
                        </div>
                      </div>
                    </a>
                  </WorkItem>
                ))}
            </div>
          </div>
        </WorkWrapper>
        <Lightbox isOpen={isOpen} onClick={this.toggleLightbox}>
          <ImageWrapper>
            {/* <CloseButton className="fas fa-times" /> */}
            {selectedImage && <Image src={selectedImage} />}
          </ImageWrapper>
        </Lightbox>
      </React.Fragment>
    );
  }
}

export default Work;

const Lightbox = styled.div`
  position: fixed;
  z-index: 2000;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  pointer-events: ${(props) => (props.isOpen ? 'default' : 'none')};
`;

const CloseButton = styled.i`
  font-size: 3rem;
  color: #fff;
  position: absolute;
  top: -1.5rem;
  right: -1rem;

  animation: fadeIn;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img``;

const WorkItem = styled.div`
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
`;

const WorkWrapper = styled.section`
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

// imgSrc={images[photoIndex]}
// nextSrc={images[(photoIndex + 1) % images.length]}
// prevSrc={images[(photoIndex + images.length - 1) % images.length]}
// onCloseRequest={() => this.setState({ isOpen: false })}
// onMovePrevRequest={() =>
// 	this.setState({
// 		photoIndex: (photoIndex + images.length - 1) % images.length,
// 	})
// }
// onMoveNextRequest={() =>
// 	this.setState({
// 		photoIndex: (photoIndex + 1) % images.length,
// 	})
// }
