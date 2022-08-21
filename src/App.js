import LightBox from './components/LightBox';
import Navbar from './components/Navbar'
import Product from './components/Product';
import { useSelector } from 'react-redux'
import {useState} from 'react'
function App() {
  const { lightboxOpen } = useSelector(state => state.lightBox)
  const [value, setValue] = useState(0);
  const {  thumbs } = useSelector(state => state.lightBox)
  const checkNumber = (number) => {
    if (number > thumbs.length - 1) {
        return 0;
    }
    if (number < 0) {
        return thumbs.length - 1;
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
  return (
    <div className="App">
      {
        lightboxOpen && <div  className='overlay'></div>
      }
      <Navbar />
      <Product nextSlide={nextSlide} prevSlide={prevSlide} value={value} setValue={setValue}/>
      {
        lightboxOpen && <LightBox nextSlide={nextSlide} prevSlide={prevSlide} value={value} setValue={setValue}/>
      }
    </div>
  );
}

export default App;
