import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Scroll from './Scroll'
const FormContainer = ({ children }) => {
  return (
    
      <Container>
      <Scroll>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
        </Scroll>
      </Container>
      
    
  )
}

export default FormContainer
