import './ItemListContainer.scss'

import { CardProducto } from '../CardProducto/CardProducto';
import { useEffect, useState } from 'react';
import { pedirProd } from '../../helpers/pedirDatos';
import {ColorRing} from 'react-loader-spinner'
import { useParams } from 'react-router';



export const ItemListContainer=()=>{  

    const [productos, setProductos]= useState([]);
    const [loading, setLoading]= useState(true);
    

    const {categoryId} = useParams()
    console.log({categoryId})

    useEffect(()=>{
        setLoading(true)
        pedirProd()
        .then((res)=>{
            if (categoryId){
                setProductos(res.filter((prod)=>prod.categoria === categoryId))
        }  else{
            setProductos(res)
        }
            
        })
        .catch((rech)=>{
            console.log(rech)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId])

    
    return(
       
        <div className='itemlistcontainer container-fluid ' >
        
        <h2 className='titulo'>Tienda de Tazas Carolinska ¡Bienvenido!</h2>
        
        {
            loading
                ?<div>
                    <br/>
                    <ColorRing height={250} width={250} />
                </div>
                
                :<div className=' row '> 
        
                {productos.map((prods)=>(
        
                <div key={prods.id} className='itemlistcontainer_product  col pb-2 '>  
        
                <CardProducto title ={prods.name}  text={prods.precio} img={prods.img} cat={prods.categoria} id={prods.id} stock={prods.stock} item={prods} />
               
        
                </div>
        
                ))}
            </div>
        }
        
    
        </div>
    )

}