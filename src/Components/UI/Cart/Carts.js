import React from 'react'
import { ListGroup } from 'reactstrap'
import CloseIcon from "@mui/icons-material/Close"
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import {CartUiActions} from "../../../Store/Shopping-cart/CartUiSlice"
import "../../../Styles/Shopping-cart.css"

const Carts = () => {
    const dispatch = useDispatch()
    const CartProduct = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const toggleCart = () => {
        dispatch(CartUiActions.toggle())
    }
  return (
    <>
    <div className='cart__container'>
        <ListGroup className='cart'>
            <div className='cart__close'>
                <span onClick={toggleCart}><CloseIcon className='closeii' /></span>
            </div>
            <div className='cart__item-list'>
                {
                    CartProduct.length === 0 ? <h6 className='text-center mt-5'>No items are added to cart</h6> : 
                    (CartProduct.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))
                    )
                }
            </div>

            <div className='cart__bottom d-flex align-items-center justify-content-between'>
                <h6>Subtotal : <span>Rs. {totalAmount}</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
    
    </>
  )
}

export default Carts