import './NavBar.scss'
import logo from './logo-caro-modified.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const NavBar = ( )=>{
    return(
        <header className="header">
            
            <div className="header_container ">

                <img className='header_logo' src={logo} alt= "logo" />

                <nav className="navbar">    

                    <Link className="navbar_link" to={"/"}>Home</Link>
                    <Link className="navbar_link" to={"./Nosotros"}>Nosotros</Link>
                    <Link className="navbar_link" to={"./Formul"}>Contacto</Link>
                    
                </nav>

            <CartWidget/>

            </div>

        </header>

    )
}