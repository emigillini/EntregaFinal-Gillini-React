import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {
    console.log(item);
    return (
     
        <div className=' container container_detail' >
            <div className='row'>
            <div className='col-4'>  <img className='imagen_detail' src={item.img} alt="Imagen de producto"></img></div>
            <div className='col-8'>  
                <h3 className="texto ">{item.name}</h3>  
                <p className="texto">{item.description}</p>
                <small>Precio :{item.precio}</small>
            </div>
        
            </div>
        
        </div>

    )
    }