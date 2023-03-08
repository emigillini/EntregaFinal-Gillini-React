import './ItemListContainer.scss'
import { CardProducto } from '../CardProducto/CardProducto'


export const ItemListContainer=({greeting})=>{
    return(
        <div className='itemlistcontainer '>

        <p>{greeting}</p>

        <div className='itemlistcontainer_product'>  
        <CardProducto title ={"Producto 1"} text={"descripcion producto1"}/>
        <CardProducto title ={"Producto 2"} text={"descripcion producto2"}/>
        <CardProducto title ={"Producto 3"} text={"descripcion producto3"}/>
        <CardProducto title ={"Producto 4"} text={"descripcion producto4"}/>
        <CardProducto title ={"Producto 5"} text={"descripcion producto5"}/>
        </div>
      
    
      
    
        </div>
    )

}