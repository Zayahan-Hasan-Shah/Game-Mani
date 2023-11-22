import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from "../../../Store/Shopping-cart/CartSlice"
import "../../../Styles/Product-card.css"

const DataCard = (props) => {
    const { id, title, image01, price } = props.item
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
    return (
        <>
            <div className='Data__item mb-4'>
                <div className='Data__img'>
                    <img src={image01} alt='Data-img' className='w-100 rounded ' />
                </div>
                <div className='Data__content'>
                    <h5><Link to={`/games/${id}`}>{title}</Link></h5>
                    <div className='d-flex align-items-center justify-content-between gap-2  price'>
                        <span className='Data__price mr-2 w-100'>Rs. {price}</span>
                        <button className='addToCart__btn ml-4 w-100' onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataCard