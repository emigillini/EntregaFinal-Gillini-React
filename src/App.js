
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
//import { Clicker } from './components/Clicker/Clicker';
import { Pokeappi } from './components/Pokeappi/Pokeappi';
//import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {

  
  return (
    <div className="App">
      
      <NavBar/>
      <Pokeappi/>
      
  
      {/*<Clicker name={"comprar esta"}/>*/}
      
      <ItemListContainer > </ItemListContainer>ItemListContainer

      <Footer/>
      
    </div>
  );
}

export default App;
