import LightBox from './components/LightBox';
import Navbar from './components/Navbar'
import Product from './components/Product';
import { useGlobalContext } from './Context';
function App() {
  const { lightBox } = useGlobalContext();
  return (
    <div className="App">
      {
        lightBox && <div  className='overlay'></div>
      }
      <Navbar />
      <Product />
      {
        lightBox && <LightBox/>
      }
    </div>
  );
}

export default App;
