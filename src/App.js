
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
//import { Clicker } from './components/Clicker/Clicker';
//import { Pokeappi } from './components/Pokeappi/Pokeappi';
import { Banner } from './components/Banner/Banner';
//import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {

  
  return (
    <div className="App">
      
      <NavBar/>
      <Banner discountAmount={20} couponCode={"Cupon1234"}/>
      {/*<Pokeappi/>*/}
      
  
      {/*<Clicker name={"comprar esta"}/>*/}
      
      <ItemListContainer > </ItemListContainer>

      <Footer/>
      
    </div>
  );
}

export default App;
