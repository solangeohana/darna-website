import React from 'react'

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap'

const ImagesCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)

  const onExiting = () => {
    setAnimating(true)
  }
  const onExited = () => {
    setAnimating(false)
  }
  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }
  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }
  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col lg='8' md='12'>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map((imageUrl) => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={imageUrl}>
                    <img
                      className='images-carousel'
                      src={imageUrl}
                      alt={imageUrl}
                    />
                  </CarouselItem>
                )
              })}
              <a
                className='carousel-control-prev'
                data-slide='prev'
                href='#pablo'
                onClick={(e) => {
                  e.preventDefault()
                  previous()
                }}
                role='button'>
                <i className='now-ui-icons arrows-1_minimal-left'></i>
              </a>
              <a
                className='carousel-control-next'
                data-slide='next'
                href='#pablo'
                onClick={(e) => {
                  e.preventDefault()
                  next()
                }}
                role='button'>
                <i className='now-ui-icons arrows-1_minimal-right'></i>
              </a>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ImagesCarousel
