import React, { useRef } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/Common-Section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../Styles/Login.css"

const Login = () => {
  const loginnameRef = useRef()
  const loginpasswordRef = useRef()
  const submitHandler = e => {
    e.preventDefault()
  }
  return (
    <>
      <Helmet title='Login' />
      <CommonSection title='login' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mt-4 mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input type='email' placeholder='Email' required ref={loginnameRef} />
                </div>
                <div className='form__group'>
                  <input type='password' placeholder='Password' required ref={loginpasswordRef} />
                </div>
                <button className='addToCart__btn' type='submit'>Login</button>
              </form>

              <Link className='registration__link ' to='/register'>Don't have an account? Create an account</Link>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Login