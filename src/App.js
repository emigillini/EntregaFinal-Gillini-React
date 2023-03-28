import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Banner } from './components/Banner/Banner';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Formul } from './components/Formul/Formul';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';



function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      
      <NavBar/>
      <Banner discountAmount={20} couponCode={"Cupon1234"}/>
      
      <Routes>

      <Route path='/' element={<ItemListContainer/> }/>
      <Route path='/Nosotros' element={<Nosotros/> }/>
      <Route path='/Productos' element={<ItemListContainer/> }/>
      <Route path='/Cart' element={<Cart/> }/>
      <Route path='/Productos/:categoryId' element={<ItemListContainer/> }/>
      <Route path='/Formul' element={<Formul/> }/>
      <Route path='/Detail/:itemId' element={<ItemDetailContainer/> }/>
      <Route path="*" element={ <Navigate to={"/"} />}/>
      
      </Routes>

      <Footer/>
      
    </div>
    </BrowserRouter>
    </CartProvider>
 
  );
}

export default App;