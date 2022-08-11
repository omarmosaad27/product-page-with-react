import React from 'react'
import {AiOutlineShoppingCart } from 'react-icons/ai'

import { useGlobalContext } from '../Context'
const ProductInfo = () => {
  const { state: { products }, dispatch, state: { cart } } = useGlobalContext();
  
  return (
    <div className="product-info">
      {
        products.map((product) => {
          const { id, company, name, desc, price, oldprice, discount } = product;
          return (
            <div className="info" key={id}>
              <h4 className="company">{company}</h4>
              <h1 className="name">{name}</h1>
              <p className="desc">{desc}</p>
              <div className="price-container">
                <div>
                <h3 className="price">{price}</h3>
                <h3 className="discount">{discount}</h3>
                </div>
                <p className="old-price">{oldprice}</p>
              </div>
              <div className="info-footer flex">
                <div className="amount-container">
                  <button onClick={() => {
                  dispatch({
                    type: "DECREASE" ,
                    payload: id 
                  })
                }}>-</button>
                  <div className="amount">
                    {cart.length === 0 ? 0 :
                      cart.map((i) => {
                        const { amount } = i; 
                        return amount
                      })
                    }
                  </div>
                  <button  onClick={() => {
                  dispatch({
                    type: "INCREASE" ,
                    payload: id 
                  })
                }}>+</button>
                </div>
                <button className="orange btn" onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product
                  })
                }}>
                  <AiOutlineShoppingCart />
                  Add To Cart
                </button>
              </div>  
                
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductInfo