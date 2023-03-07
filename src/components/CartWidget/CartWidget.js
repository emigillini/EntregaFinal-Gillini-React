import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.scss'

export const CartWidget = () =>{

    return(
        <div className="cart-widget-icon">

            <FaShoppingCart/>
           
            <span > 0</span>
        </div>
    )
}