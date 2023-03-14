import './ItemListContainer.scss'

import { CardProducto } from '../CardProducto/CardProducto'
import { useEffect, useState } from 'react';
import taza from "./diaptaza3.jpg"
import taza1 from "./diaptaza4.jpg"

const Data =[
    {id:1, name:"taza 1", precio: 1000, img:taza},
    {id:2, name:"taza 2", precio: 1100, img:taza1},
    {id:3, name:"taza 3", precio: 1200, img:taza},
    {id:4, name:"taza 4", precio: 1300, img:taza},
    {id:5, name:"taza 5", precio: 1400, img:taza},
    {id:6, name:"taza 6", precio: 1500, img:taza},];


export const ItemListContainer=()=>{  

    const [productos, setProductos]= useState([]);
    console.log(productos)

    const pedirProd=()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(Data);
                reject();
            },2000)
        })
    }
    useEffect(()=>{
        pedirProd()
        .then((res)=>{
            setProductos(res)
        })
        .catch((rech)=>{
            console.log(rech)
        })
    },[])
    
   
    return(
        <div className='itemlistcontainer container fluid '>

    
        
        <h2>Tienda de Tazas</h2>
        
        <div className=' row '> 
        
        {productos.map((prods)=>(

        <div className='itemlistcontainer_product container-fluid col-3 mb-3 '>  

        <CardProducto title ={prods.name} text={prods.precio} img={prods.img}/>

        </div>

        ))}
    </div>
       
        </div>
    )

}