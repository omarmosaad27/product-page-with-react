import React from 'react'
import {AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'
import {addtoCart,calculateTotals,increaseAmount,decreaseAmount} from '../redux/CartSlice.js'
const ProductInfo = () => {
  const { product,amount } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="product-info">
      {
        product.map((item) => {
          const { id, company, name, desc, price, oldprice, discount } = item;
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
                  <button onClick={()=>dispatch(decreaseAmount(id))}>-</button>
                  <div className="amount">
                    {amount}
                  </div>
                  <button onClick={()=>dispatch(increaseAmount(id))} >+</button>
                </div>
                <button className="orange btn" onClick={() => {
                  dispatch(addtoCart(id))
                  dispatch(calculateTotals())
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