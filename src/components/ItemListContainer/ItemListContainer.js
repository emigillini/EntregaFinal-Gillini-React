import './ItemListContainer.scss'

import { CardProducto } from '../CardProducto/CardProducto';
import { useEffect, useState } from 'react';
import { pedirProd } from '../../helpers/pedirDatos';


export const ItemListContainer=()=>{  

    const [productos, setProductos]= useState([]);

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

        <div key={prods.id} className='itemlistcontainer_product container-fluid col-3 mb-3 '>  

        <CardProducto title ={prods.name} text={prods.precio} img={prods.img}/>

        </div>

        ))}
    </div>
    
        </div>
    )

}