import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import logo from "../../Asset/Images/web-game-logo.png"
import "../../Styles/Header.css"
import { NavLink, Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useSelector, useDispatch } from "react-redux"
import { CartUiActions } from "../../Store/Shopping-cart/CartUiSlice"

const Header = () => {
  const nav__Link = [
    {
      display: 'Home',
      path: '/home'
    },
    {
      display: 'Games',
      path: '/games'
    },
    {
      display: 'Cart',
      path: '/cart'
    },
    {
      display: 'Contact',
      path: '/contact'
    },
  ]

  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
  const dispatch = useDispatch()
  const toggleCart = () => {
    dispatch(CartUiActions.toggle())
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink')
      }
      else {
        headerRef.current.classList.remove('header__shrink')
      }
    })

    return () => window.removeEventListener('scroll', () => { })
  }, [])

  return (
    <>
      <header className='header' ref={headerRef} >
        <Container>
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            <div className='logo'>
              <img src={logo} alt='web-logo' className='mt-2' />
              <h5 className='mt-1'>Game Mani</h5>
            </div>

            {/* menu */}

            <div className='navigation' ref={menuRef} onClick={toggleMenu} >
              <div className='menu d-flex align-items-center gap-5'>
                {
                  nav__Link.map((item, ind) => (
                    <NavLink to={item.path} key={ind}
                      className={navClass => navClass.isActive ? 'active__menu' : ''}>
                      {item.display}
                    </NavLink>
                  ))
                }
              </div>
            </div>

            {/* nav right icon */}
            <div className='nav__right d-flex align-items-center gap-4'>
              <span className='cart__icon' onClick={toggleCart}>
                <ShoppingCartIcon className='i' />
                <span className='cart__badge'>{totalQuantity}</span>
              </span>

              <span className='user'>
                <Link to='/login'><PersonIcon className='i' /></Link>
              </span>

              <span className='mobile__menu' onClick={toggleMenu}>
                <MenuOutlinedIcon className='i' />
              </span>

            </div>

          </div>
        </Container>
      </header>

    </>
  )
}

export default Header