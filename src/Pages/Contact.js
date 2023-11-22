import React, { useRef, useState } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/Common-Section/CommonSection'

const Contact = () => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')

  const submitHandler = e => {
    e.preventDefault()

  }
  return (
    <>
      <Helmet title='Contact' />
      <CommonSection title='Contact' />
      <section>
        <form className='form mb-5 mt-5' onSubmit={submitHandler}>
          <div className='form__group'>
            <input type='text' placeholder='Enter your  name' onChange={e => setEnteredName(e.target.value)} required />
          </div>
          <div className='form__group'>
            <input type='text' placeholder='Enter your  email' onChange={e => setEnteredEmail(e.target.value)} required />
          </div>
          <div className='form__group'>
            <textarea rows={5} type='text' placeholder='Write your review or message' onChange={e => setReviewMsg(e.target.value)} required />
          </div>

          <button type='submit' className='addToCart__btn'>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Contact