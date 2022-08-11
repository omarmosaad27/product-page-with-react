import React from 'react'
import { useGlobalContext } from '../Context'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Images = () => {
    const { image, thumb, setValue,value, setLightBox ,prevSlide,nextSlide} = useGlobalContext();
    
    return (
        <>
            <div className="gallery">
                    <div className="btns">
                        <FiChevronLeft onClick={prevSlide} className="icon-left"/>
                        <FiChevronRight onClick={nextSlide} className="icon-right"/>
                    </div>
                <div className="main-image" onClick={()=>setLightBox(true)}>
                    <img src={image.product} alt="main" />
                </div>
                <div className="thumbs ">
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

export default Images