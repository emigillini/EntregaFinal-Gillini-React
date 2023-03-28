import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export const CartWidget = () =>{
    const {totalCantidad} = useContext(CartContext)

    return(
        <Link to={"/cart"} className="cart-widget-icon">

            <FaShoppingCart/>
        
            <span className="cart-widget-icon"> {totalCantidad()}</span>
        </Link>
    )
}