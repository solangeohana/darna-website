import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'reactstrap'
import NavbarAdmin from 'components/NavbarAdmin'
import MyFooter from 'components/English/MyFooter'

const DashboardScreen = ({ history }) => {

  const userInfo = useSelector((state) => state.userLogin.userInfo)
  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/en/admin/login')
    }
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('sidebar-collapse')
    }
  }, [history, userInfo])

  return (
    <>
      <NavbarAdmin />

      <div
        className='section section-signup'
        style={{
          backgroundImage: 'url(' + require('assets/img/clouds.jpg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          minHeight: '900px',
        }}>
        <Container>
          <div className='admintitle'>
            <h2>ADMIN DASHBOARD</h2>
          </div>
          <Row>
            <Col md='4'>
              <div className='dashboard-items'>
                <div className='dashboard-titles'>
                  <h4>Manage Renting Objects</h4>
                </div>
                <div className='dashboard-button'>
                  <Button
                    className='btn-round'
                    color='primary'
                    size='lg'
                    href='/en/admin/rent'>
                    RENT
                  </Button>
                </div>
              </div>
            </Col>
            <Col md='4'>
              <div className='dashboard-items'>
                <div className='dashboard-titles'>
                  <h4>Manage Buying Objects</h4>
                </div>
                <div className='dashboard-button'>
                  <Button
                    className='btn-round'
                    color='primary'
                    size='lg'
                    href='/en/admin/buy'>
                    BUY
                  </Button>
                </div>
              </div>
            </Col>
            <Col md='4'>
              <div className='dashboard-items'>
                <div className='dashboard-titles'>
                  <h4>Manage Commercial Objects</h4>
                </div>
                <div className='dashboard-button'>
                  <Button
                    className='btn-round'
                    color='primary'
                    size='lg'
                    href='/en/admin/commercial'>
                    COMMERCIAL
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <MyFooter />
    </>
  )
}

export default DashboardScreen
