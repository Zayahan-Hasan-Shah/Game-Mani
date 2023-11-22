import React, {useRef} from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/Common-Section/CommonSection'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from "reactstrap"

const Register = () => {
  const signupnameRef = useRef()
  const signupemailRef = useRef()
  const signuppasswordRef = useRef()
  const submitHandler = e => {
    e.preventDefault()
  }
  return (
   <>
    <Helmet title='Register' />
      <CommonSection title='register' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5 mt-4' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input type='text' placeholder='Full name' required  ref={signupnameRef}/>
                </div>
                <div className='form__group'>
                  <input type='email' placeholder='Email' required  ref={signupemailRef}/>
                </div>
                <div className='form__group'>
                  <input type='password' placeholder='Password' required ref={signuppasswordRef} />
                </div>
                <button className='addToCart__btn' type='submit'>Sign Up</button>
              </form>

              <Link to='/login'>Don't have an account?Login</Link>
            </Col>

          </Row>
        </Container>
      </section>
   </>
  )
}

export default Register