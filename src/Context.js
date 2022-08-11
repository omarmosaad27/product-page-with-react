import React,{ useContext,useEffect,useState,useReducer } from "react"
import images from './images'
import thumbs from "./thumbs";
import products from "./Products";
import { cartReducer } from "./Reducer";
const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    // 1* image slider state
    const [value, setValue] = useState(0);
    const [image, setImage] = useState([])
    const [thumb,setThumb] = useState(thumbs)
    const [lightBox, setLightBox] = useState(false);

    // 1* slider functions
    useEffect(() => {
        setImage(images[value])
    }, [value])
    
    const checkNumber = (number) => {
    if (number > thumb.length - 1) {
        return 0;
    }
    if (number < 0) {
        return thumb.length - 1;
    }
    return number;
    }
    const nextSlide = () => {
        setValue((value) => {
            let newValue = value + 1 
            return checkNumber(newValue)
        })
    }
    const prevSlide = () => {
        setValue((value) => {
            let newValue = value - 1 
            return checkNumber(newValue)
        })
    }
    // 2* product info state
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[]
    })
    return (
        <AppContext.Provider value={{
            image,
            thumb,
            setValue,
            value,
            lightBox,
            setLightBox,
            prevSlide,
            nextSlide,
            state,
            dispatch

        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return (
        useContext(AppContext)
    )
}
