import React from 'react'
import { Button, Col, Row, Card, CardImg, CardBody } from 'reactstrap'
import Loader from 'components/Loader'

export function CoverPhoto({ src, uploading }) {
  if (uploading) {
    return (
      <div style={{ display: 'block', margin: '10px' }}>
        <Loader />
      </div>
    )
  } else if (src) {
    return (
      <img
        src={src}
        alt={src}
        style={{
          maxWidth: '100%',
          maxHeight: '200px',
          display: 'block',
          margin: '10px',
        }}
      />
    )
  }
  return null
}

export function UploadedImages({ images, uploading, onRemove }) {
  return (
    <Row>
      {images.map((url) => (
        <Col sm='4' key={url}>
          <Card style={{ width: '100%', height: '210px' }}>
            <CardImg
              top
              width='100%'
              src={url}
              alt={url}
              style={{ borderBottom: '1px solid black', maxHeight: '160px' }}
            />
            <CardBody style={{ padding: '0 10px' }}>
              <Button
                size='sm'
                onClick={(e) => {
                  e.preventDefault()
                  onRemove(url)
                }}>
                Remove
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
      {uploading ? (
        <Col sm='4'>
          <Card style={{ width: '100%', height: '210px' }}>
            <CardBody style={{ padding: '0 10px' }}>
              <Loader />
            </CardBody>
          </Card>
        </Col>
      ) : null}
    </Row>
  )
}
