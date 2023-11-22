import React from 'react'
import { ListGroupItem } from 'reactstrap'
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { useDispatch } from 'react-redux'
import { cartActions } from "../../../Store/Shopping-cart/CartSlice"
import "../../../Styles/Cart-item.css"

const CartItem = ({ item }) => {

    const { id, title, price, image01, quantity, totalPrice } = item
    const dispatch = useDispatch()
    const IncreamentItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }
    const DecreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }
    const DeleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
    return (
        <>
            <ListGroupItem className='border-0 cart__item'>
                <div className='cart__item-info d-flex gap-2'> 
                    <div className='cart__product-info w-100 d-flex align-items-center justify-content-between gap-4'>
                        <div>
                            <h6 className='cart__product-title'>{title}</h6>
                            <p className='d-flex align-items-center gap-5 cart__product-price'>{quantity}x <span>Rs.{totalPrice}</span></p>
                            <div className='d-flex align-items-center justify-content-between increase__decrease-btn'>
                                <span className='increase__btn' onClick={IncreamentItem}><AddIcon className='addi' /></span>
                                <span className='quantity'>{quantity}</span>
                                <span className='decrease__btn' onClick={DecreaseItem}><RemoveIcon className='minusi' /></span>
                            </div>
                        </div>
                        <span className='delete__btn' onClick={DeleteItem}><CloseIcon className='closei' /></span>
                    </div>
                </div>
            </ListGroupItem>

        </>
    )
}

export default CartItem