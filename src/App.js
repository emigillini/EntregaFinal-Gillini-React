
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
//import { Clicker } from './components/Clicker/Clicker';
//import { Pokeappi } from './components/Pokeappi/Pokeappi';
import { Banner } from './components/Banner/Banner';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Nosotros } from './components/Nosotros/Nosotros';
import { Formul } from './components/Formul/Formul';




function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      
      <NavBar/>
      <Banner discountAmount={20} couponCode={"Cupon1234"}/>
      

      <Routes>
      
      <Route exact path='/' element={<ItemListContainer/> }/>
      <Route exact path='/Nosotros' element={<Nosotros/> }/>
      <Route exact path='/Formul' element={<Formul/> }/>
      <Route path="*" element={<ItemListContainer/>} />
      
      
      </Routes>

      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
