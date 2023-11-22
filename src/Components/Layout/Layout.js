import React from 'react'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import PathOfPage from "../../Path/PathOfPage"
import Carts from "../UI/Cart/Carts"
import { useSelector } from 'react-redux'

const Layout = () => {
  const showCart = useSelector(state => state.cartUi.cartIsVisible)
  return (
    <>
    <Header />
    {showCart && <Carts />} 
    <div>
       <PathOfPage />
    </div>
    <Footer />
    </>
  )
}

export default Layout