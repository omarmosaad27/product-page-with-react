import React from 'react'
import { useGlobalContext } from '../Context'
import {FiTrash} from 'react-icons/fi'
const Cart = () => {
    const { state: { cart }, thumb,dispatch } = useGlobalContext();
    const { product } = thumb[0]
    console.log(cart);
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
                                        <img src={product} alt="im" />
                                    </div>
                                    <div className="item-info">
                                        <div className="item-name">{item.name}</div>
                                        <div className="total">
                                            <div className="item price">${item.price} x {item.amount}   <strong>${item.price * item.amount}</strong>  </div>
                                        </div>
                                    </div>
                                        <FiTrash className='trash' onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            })
                                            }}/>
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