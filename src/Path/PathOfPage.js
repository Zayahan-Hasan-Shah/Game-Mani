import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import AllGame from "../Pages/AllGame"
import Checkout from "../Pages/Checkout"
import Contact from "../Pages/Contact"
import Cart from "../Pages/Cart"
import GameDetail from "../Pages/GameDetail"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"

const Pathofpage = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='/home' element={<Home />} />
                <Route path='/games' element={<AllGame />} />
                <Route path='/games/:id' element={<GameDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Pathofpage