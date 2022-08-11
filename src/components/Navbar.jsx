import React from 'react'
import { AiOutlineMenu,AiOutlineShoppingCart,AiOutlineClose } from 'react-icons/ai'
import logo from '../images/logo.svg'
import avatar from '../images/image-avatar.png'
import Cart from './Cart'
import { useState } from 'react'
const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const [openNav, setOpenNav] = useState(false);
    return (
        <>
            {
                openNav && <div className="overlay"></div>
            }
            
            <div className="navbar flex">
                <div className="nav-header flex">
                    <AiOutlineMenu className='menu-icon' onClick={()=>setOpenNav(!openNav)}/>
                    <div className="logo">
                        <img src={logo} alt="lo" />
                    </div>
                    <ul className={`${openNav ? "nav-links flex show" : "nav-links flex"}`}>
                        <li className="nav-link">
                            <AiOutlineClose className='close-icon'onClick={()=>setOpenNav(!openNav)}/>
                        </li>
                        <li className='nav-link'>
                            <a href="/collections">Collections</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/Men">Men</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/Women">Women</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/About">About</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/Contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="cart flex">
                    <AiOutlineShoppingCart  className='cart-icon' onClick={()=>setCartOpen(!cartOpen)}/>
                    <div className="avatar">
                        <img src={avatar} alt="person" />
                    </div>
                </div>
            </div>
            {
                cartOpen && <Cart/>
            }
        </>
    )
}

export default Navbar