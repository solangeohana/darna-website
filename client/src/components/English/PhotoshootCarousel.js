import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/shoot1.jpg"),
    altText: "photo1",
  },
  {
    src: require("assets/img/shoot2.jpg"),
    altText: "photo2",
  },
  {
    src: require("assets/img/shoot3.jpg"),
    altText: "photo3",
  },
  {
    src: require("assets/img/shoot4.jpg"),
    altText: "photo4",
  },
  {
    src: require("assets/img/shoot5.jpg"),
    altText: "photo5",
  },
  {
    src: require("assets/img/shoot6.jpg"),
    altText: "photo6",
  },
  {
    src: require("assets/img/shoot7.jpg"),
    altText: "photo7",
  }
];

function PhotoshootCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
            <h4>Example of a Professional Photoshoot:</h4>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PhotoshootCarousel;