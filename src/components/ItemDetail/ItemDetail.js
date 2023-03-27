import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';

export const ItemDetail = ({ item }) => {
    
    let[cantidad, setCantidad]=useState(1)
    const {cart, setCart}=useContext(CartContext) 
    const agregar =()=>{
        const itemCarrito ={
            ...item,
            cantidad,
            
        }
    setCart([...cart, itemCarrito])


console.log(itemCarrito)
    }
    return (
        
        <div className=' container container_detail' >
            <div className='row'>
            <div className='col-4'>  <img className='imagen_detail' src={item.img} alt="Imagen de producto"></img></div>
            <div className='col-8'>  
                <h3 className="texto ">{item.name}</h3>  
                <p className="texto">{item.description}</p>
                <small>Precio :{item.precio}</small>
                <ItemCount max={item.stock} item={item} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>
            </div>
            </div>
        </div>
    )
    }