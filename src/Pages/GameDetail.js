import React, { useEffect, useState } from 'react'
import Data from '../Asset/Data/Data'
import { useParams } from 'react-router-dom'
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap"
import { useDispatch } from 'react-redux'
import { cartActions } from '../Store/Shopping-cart/CartSlice'
import "../Styles/Game-details.css"
import CommonSection from '../Components/UI/Common-Section/CommonSection'


const GameDetail = () => {
  const [tab, setTab] = useState('desc')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')

  console.log(enteredName, enteredEmail, reviewMsg)

  const {id} = useParams()
  const dispatch = useDispatch()
  const data = Data.find(product => product.id === id)
  const [previewImg, setPreviewImg] = useState(data.image01)
  const { title, price, company, category, desc, image01 } = data

  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }

  const submitHandler = e => {
    e.preventDefault()

  }
  useEffect(()=>{
    setPreviewImg(data.image01)
  },[data])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  return (
    <>
      <Helmet title='Product-details'>
        <CommonSection title={title} />
        <section>
          <Container className='mt-5'>
            <Row>
              
              <Col lg='2' md='2' sm='2' className=''>
                <div className='product__images mb-4 '>
                  <div className='img__item  mb-3' onClick={() => setPreviewImg(data.image01)}>
                    <img src={data.image01} alt='' className='w-100' />
                  </div>
                  <div className='img__item mb-3' onClick={() => setPreviewImg(data.image02)}>
                    <img src={data.image02} alt='' className='w-100' />
                  </div>
                  <div className='img__item' onClick={() => setPreviewImg(data.image03)}>
                    <img src={data.image03} alt='' className='w-100' />
                  </div>
                </div>
              </Col>
              <Col lg='4' md='4'>
                <div className='product__main mb-4'>
                  <img src={previewImg} alt='' className='w-100 object-fit-cover rounded' />

                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className='single__product-content'>
                  <h2 className='product__title mb-3'>{title}</h2>
                  <h4 className='product__company mb-2'>{company}</h4>
                  <p className='product__price'>Price: <span>Rs. {price}</span></p>
                  <p className='category mb-5'>Category: <span>{category}</span></p>
                  <button onClick={addItem} className='addToCart__btn'>Add to Cart</button>
                </div>
              </Col>
              

              <Col lg='12'>
                <div className='tabs d-flex align-items-center gap-5 py-3'>
                  <h6 className={` ${tab === 'desc' ? "tab__active" : ""}`} onClick={() => setTab('desc')}>Description</h6>
                  <h6 className={` ${tab === 'rev' ? "tab__active" : ""}`} onClick={() => setTab('rev')}>Review</h6>
                </div>

                {
                  tab === 'desc' ? <div className='tab__content'>
                    <p>{desc}
                    </p>
                  </div> : <div className='tab__form mb-3'>
                    <div className='review  pt-5'>
                      <p className='user__name mb-0'>Jhon Doe</p>
                      <p className='user__email'>Jhon12@gmail.com</p>
                      <p className='feedback__text' >great Product</p>
                    </div>



                    <div className='review'>
                      <p className='user__name mb-0'>Jhon Doe</p>
                      <p className='user__email'>Jhon12@gmail.com</p>
                      <p className='feedback__text' >great Product</p>
                    </div>
                    <form className='form mb-5' onSubmit={submitHandler}>
                      <div className='form__group'>
                        <input type='text' placeholder='Enter your  name' onChange={e => setEnteredName(e.target.value)} required />
                      </div>
                      <div className='form__group'>
                        <input type='text' placeholder='Enter your  email' onChange={e => setEnteredEmail(e.target.value)} required />
                      </div>
                      <div className='form__group'>
                        <textarea rows={5} type='text' placeholder='Write your review' onChange={e => setReviewMsg(e.target.value)} required />
                      </div>

                      <button type='submit' className='addToCart__btn'>Submit</button>
                    </form>
                  </div>
                }
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default GameDetail