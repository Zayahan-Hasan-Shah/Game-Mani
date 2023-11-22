import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../Asset/Images/web-game-logo.png"
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../../Styles/Footer.css"

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <Container>
          <Row>
            <Col lg='3' md='4' sm='6'>
              <div className='logo footer__logo text-start'>
                <img src={logo} alt='logo' className='w-75' />
                <h5 className='game__name mt-1'>Game Mani</h5>
                <p>Lorem ipsum dolo sit amet consectetur adipisicing elit.
                  Nesciunt pariatur accusamus
                </p>
              </div>
            </Col>

            <Col lg='3' md='4' sm='6'>
              <h5 className='footer__title'>Delivery time</h5>
              <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Sunday - Thursday</span>
                  <p>10:00am : 11:00pm</p>
                </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Friday - Saturday</span>
                  <p>Off days</p>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg='3' md='4' sm='6'>
              <h5 className='footer__title'>Contact</h5>
              <ListGroup className='delivery__time-list'>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <p>Location : ABC Road, Karachi-2310, Pakistan</p>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Phone : 01236559974</span>
                </ListGroupItem>
                <ListGroupItem className='delivery__time-item border-0 ps-0'>
                  <span>Email : Hi123@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg='3' md='4' sm='6'>
              {/* <h5 className='footer__title'>Give Suggestion</h5>
              <p>Simply enter your email</p>
              <div className='newsletter'>
                <input type='email' placeholder='Enter your email' />
                <span><SendIcon className='i' /></span>
              </div> */}
            </Col>
          </Row>

          <Row className='mt-5'>
            <Col lg='6' md='6'>
              <p className='copyright__text'>Copyright - 2023, website made by Zayahan Hasan Shah, All right reserved.</p>

            </Col>
            <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-center">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com">
                  <FacebookIcon className='i' />
                </Link>
              </span>

              <span>
                <Link to="https://github.com">
                  <GitHubIcon className='i' />
                </Link>
              </span>

              <span>
                <Link to=" https://www.youtube.com">
                  <YouTubeIcon className='i' />
                </Link>
              </span>

              <span>
                <Link to=" https://www.linkedin.com">
                  <LinkedInIcon className='i' />
                </Link>
              </span>
            </div>
          </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer