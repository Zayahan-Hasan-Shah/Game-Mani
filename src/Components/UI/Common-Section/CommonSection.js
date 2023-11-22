import React from 'react'
import { Container } from 'reactstrap'
import "../../../Styles/Common-section.css"

const CommonSection = (props) => {
  return (
    <>
    <section className='common__section mt-5'>

        <Container>
            <h2 className='text-white'>
              {props.title}
            </h2>
        </Container>
    </section>
    </>
  )
}

export default CommonSection