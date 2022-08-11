import React from 'react'
import { useGlobalContext } from '../Context'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
const LightBox = () => {
    const { image, thumb, setValue,value,nextSlide,setLightBox,prevSlide} = useGlobalContext();
    
    return (
        <>
        <div className="lightbox">
            
            <div className="main-image">
                    <img src={image.product} alt="main" />
                    <div className="btns">
                        <FiChevronLeft onClick={prevSlide} className="icon-right"/>
                        <FiChevronRight onClick={nextSlide} className="icon-left"/>
                    </div>
                    <AiOutlineClose className='close-lightbox' onClick={()=>setLightBox(false)}/>

            </div>
            <div className="thumbs">
                {
                        thumb.map((item,index) => {
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