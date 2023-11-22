import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../../../Styles/Category.css"

const Category = () => {
    const CategoryData = [
        {
            display : "Stealth"
        },
        {
            display : "Fighting"
        },
        {
            display : "Survival"
        },
        {
            display : "Adventure"
        },
        {
            display : "Theft"
        },
        {
            display : "Car drive"
        },
        {
            display : "Hacking"
        },
    ]
  return (
    <>
    <Container>
        
        <Row>
            <h2 className='category__heading text-center mt-5 mb-4'>Category</h2>
        {CategoryData.map((item, index) => (
                        <Col lg='4' md='4' sm='6' xs='6' className='mb-4' key={index}>
                            <div className='category__item d-flex align-items-center gap-3 mt-4 w-100'>
                                <div className='category__img'>
                                    {/* <img src={item.imgUrl} alt='category__item' /> */}
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))}
        </Row>
    </Container>

    </>
  )
}

export default Category