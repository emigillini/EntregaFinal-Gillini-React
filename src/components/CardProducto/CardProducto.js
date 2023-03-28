import './CardProducto.scss'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';




export const CardProducto = ({title, text, img, cat, id, stock, item}) => {
  let[cantidad, setCantidad]=useState(1)
  const {sumarCarrito}=useContext(CartContext) 

  const agregar =()=>{
    const itemCarrito ={
        ...item,
        cantidad,
        
    }
sumarCarrito(itemCarrito)

  }
 
    return (
      <Card  style={{ width: '14rem' }} className= "card_container">
        <Card.Img variant="top" src={img} className="image_card"/>
        <Card.Body className='card_body'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Precio ={text}</Card.Text>
          <Link to={`/detail/${id}`} className="btn btn-primary btn-lg ver_mas" >VER MAS</Link>
          <Card.Text className='text'>Categoria = {cat}</Card.Text>
          <ItemCount max={stock} item={item} cantidad={cantidad} setCantidad={setCantidad} agregar={agregar}/>
        </Card.Body>
      </Card>
    );
  }
  
