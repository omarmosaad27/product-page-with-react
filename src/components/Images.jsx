import React from 'react'
import {openLightBox} from '../redux/LightboxSlice'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
const Images = ({nextSlide,prevSlide,value,setValue}) => {
    const { thumbs, images } = useSelector(state => state.lightBox)
    const dispatch = useDispatch()
    return (
        <>
            <div className="gallery">
                    <div className="btns">
                        <FiChevronLeft className="icon-left" onClick={prevSlide}/>
                        <FiChevronRight  className="icon-right" onClick={nextSlide}/>
                    </div>
                <div className="main-image" onClick={()=>dispatch(openLightBox())}>
                    <img src={images[value].product} alt="main" />
                </div>
                <div className="thumbs ">
                    {
                            thumbs.map((item,index) => {
                            const { id, product } = item;
                            return (
                                <button className={`${index === value ? "thumb active" : "thumb"}`}  key={id} onClick={()=>setValue(index)}>
                                    <img src={product} alt="pro" />
                                </button>
                            
                        )})
                    }
                </div>
            </div>
        </>
    )
}

export default Images