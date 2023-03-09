
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Clicker } from './components/Clicker/Clicker';




function App() {

  
  return (
    <div className="App">
      
      
      <NavBar/>
      


      <Clicker name={"comprar esta"}/>
      <ItemListContainer greeting={"Tienda de Tazas"} />

      <Footer/>
      
    </div>
  );
}

export default App;
