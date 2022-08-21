import React from 'react'
import Images from './Images'
import ProductInfo from './ProductInfo'
const Product = ({nextSlide,prevSlide,value,setValue}) => {
    return (
        <div className="product">
            <Images nextSlide={nextSlide} prevSlide={prevSlide} value={value} setValue={setValue}/>
            <ProductInfo/>
        </div>
    )
}

export default Product