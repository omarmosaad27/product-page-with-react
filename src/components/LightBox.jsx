import React from 'react'
import {closeLightBox} from '../redux/LightboxSlice'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
const LightBox = ({nextSlide,prevSlide,value,setValue}) => {
    const {  thumbs ,images} = useSelector(state => state.lightBox)
    const dispatch = useDispatch()
    
    return (
        <>
        <div className="lightbox">
            
            <div className="main-image">
                    <img src={images[value].product} alt="main" />
                    <div className="btns">
                        <FiChevronLeft  className="icon-right" onClick={prevSlide}/>
                        <FiChevronRight  className="icon-left" onClick={nextSlide}/>
                    </div>
                    <AiOutlineClose className='close-lightbox' onClick={()=>dispatch(closeLightBox())}/>

            </div>
            <div className="thumbs">
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

export default LightBox