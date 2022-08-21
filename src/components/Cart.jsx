import React, { useEffect } from 'react'
import {FiTrash} from 'react-icons/fi'
import { useSelector,useDispatch } from 'react-redux'
import {removeFromCart,calculateTotals} from '../redux/CartSlice'
const Cart = () => {
    const {cart} = useSelector(state=>state.cart)
    const { thumbs } = useSelector(state => state.lightBox)
    const image = thumbs.find((img) => img.id === 0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(calculateTotals())
    },[cart])
    return (
        <div className="your-cart">
            <div className="cart-title">
                <h2>cart</h2>
            </div>
            
            <div className="underline"></div>
            <div className="cart-item flex">
                {
                    cart.map((item) => {
                        return (
                            <>
                                <div className="item" key={item.id}>
                                    <div className="img">
                                        <img src={image.product} alt="im" />
                                    </div>
                                    <div className="item-info">
                                        <div className="item-name">{item.name}</div>
                                        <div className="total">
                                            <div className="item price">${item.price} x {item.amount}   <strong>${item.price * item.amount}</strong>  </div>
                                        </div>
                                    </div>
                                        <FiTrash className='trash' onClick={()=>dispatch(removeFromCart(item.id))}/>
                                </div>
                                <button className="btn orange">check out</button>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart