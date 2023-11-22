import React from 'react'
import CommonSection from '../Components/UI/Common-Section/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from "reactstrap"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../Store/Shopping-cart/CartSlice'
import "../Styles/CartPage.css"

const Cart = () => {
  const cartItem = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <>
      <Helmet title='Cart' />
      <CommonSection title='Your  Gaming Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItem.length === 0 ? (
                  <h5 className='mt-4 text-center'>Your Gaming cart is empty</h5>
                )
                  :
                  (<table className='table table-bordered mb-5 align-items-middle mt-4'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>

                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItem.map(item => <Tr item={item} key={item.id} />)
                      }
                    </tbody>
                  </table>)
              }

              <div className='bill mt-4 mb-4'>
                <h6> Subtotal : Rs.
                  <span className='cart__subtotal'>
                    {totalAmount}
                  </span>
                </h6>
                <p>
                  Taxes and shipping will calculate at checkout
                </p>
                <div>
                  <button className='addToCart__btn me-4'><Link to='/games'>Continue Shopping</Link></button>
                  <button className='addToCart__btn'><Link to='/checkout'>Proceed to checkout</Link></button>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <>
      <tr>
        <td className='text-center cart__img-box '><img src={image01} alt='' /></td>
        <td className='text-center'>{title}</td>
        <td className='text-center'>Rs. {price}</td>
        <td className='text-center'>{quantity}</td>
        <td className='text-center cart__item-del'><DeleteIcon onClick={deleteItem} className='deletecart' /></td>
      </tr>
    </>
  )
}


export default Cart