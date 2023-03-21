import './ItemListContainer.scss'

import { CardProducto } from '../CardProducto/CardProducto';
import { useEffect, useState } from 'react';
import { pedirProd } from '../../helpers/pedirDatos';
import {ColorRing} from 'react-loader-spinner'
import { useParams } from 'react-router';


export const ItemListContainer=()=>{  

    const [productos, setProductos]= useState([]);
    const [loading, setLoading]= useState(true);
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        setLoading(true)
        pedirProd()
        .then((res)=>{
            setProductos(res)
        })
        .catch((rech)=>{
            console.log(rech)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    
    return(
        <div className='itemlistcontainer container-fluid '>

        <h2 className='titulo'>Tienda de Tazas Carolinska ¡Bienvenido!</h2>
        
        {
            loading
                ?<ColorRing height={250} width={250}/>
                :<div className=' row '> 
        
                {productos.map((prods)=>(
        
                <div key={prods.id} className='itemlistcontainer_product  col pb-2 '>  
        
                <CardProducto title ={prods.name} text={prods.precio} img={prods.img}/>
        
                </div>
        
                ))}
            </div>
        }
        
    
        </div>
    )

}