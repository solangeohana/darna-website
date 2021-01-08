import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const DashboardScreen = () => {
  return (
    <>
      <div className='wrapper'>
        <div className='section'>
          <div className='section section-team text-center'>
            <Container>
              <h4 className='title'>ADMIN DASHBOARD</h4>
              <div className='team'>
                <Row>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>Manage Renting Objects</h4>
                      <Button
                        className='btn-round'
                        color='info'
                        size='lg'
                        href='/admin/rent'>
                        RENT
                      </Button>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>Manage Buying Objects</h4>
                      <Button
                        className='btn-round'
                        color='info'
                        size='lg'
                        href='/admin/buy'>
                        BUY
                      </Button>
                    </div>
                  </Col>
                  <Col md='4'>
                    <div className='team-player'>
                      <h4 className='title'>Manage Commercial Objects</h4>
                      <Button
                        className='btn-round'
                        color='info'
                        size='lg'
                        href='/admin/commercial'>
                        COMMERCIAL
                      </Button>
                    </div>
                  </Col>
                    
                  <Col md='12'>
                  <div className='team-player'>
                    <h4 className='title'>Manage Users</h4>
                    <Button
                      className="btn-round"
                      color="info"
                      size='lg'
                      href='/admin/users'
                    >
                      USERS
                    </Button>
                  </div>
                </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardScreen
//  <>
//       <Container>
//         <Row>
//           <Col>
//
//           </Col>
//           <Col>
//             <Link to='/admin/rent'>Rent </Link>
//           </Col>
//           <Col>
//             <Link to='/admin/buy'>Buy </Link>
//           </Col>
//           <Col>
//             <Link to='/admin/commercial'>Commercial </Link>
//           </Col>
//         </Row>
//       </Container>
//     </>
