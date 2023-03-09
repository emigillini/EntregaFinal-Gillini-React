import './NavBar.scss'
import logo from './logo-caro-modified.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = ( )=>{
    return(
        <header className="header">
            
            <div className="header_container ">

                <img className='header_logo' src={logo} alt= "logo" />

                <nav className="navbar">    

                    <p className="navbar_link">Home</p>
                    <p className="navbar_link">Productos</p>
                    <p className="navbar_link">Nuestra Historia</p>
                    <p className="navbar_link">Contacto</p>

                </nav>

            <CartWidget/>

            </div>

        </header>

    )
}