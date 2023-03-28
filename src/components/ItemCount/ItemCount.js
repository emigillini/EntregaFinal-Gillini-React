import './ItemCount.scss'

export const ItemCount=({max, cantidad, setCantidad, agregar})=>{
    

    const sumarClick = () =>{
        if(cantidad<max){ setCantidad(cantidad+1)};
    }
    const restarClick = () =>{
        
        if(cantidad<=0){
            setCantidad(cantidad=0);}
            else{
            setCantidad(cantidad-1);
        }
    }
    
return(
    <div>

    <button onClick={restarClick} className="btn  btn-primary m-1 ver_mas" >-</button>
    <span className="mx-3">{cantidad}</span>
    <button onClick={sumarClick} className="btn  btn-primary m-1 ver_mas" >+</button>
    <button  onClick={agregar} className="btn  btn-primary m-1 ver_mas" >AGREGAR</button>
    
    </div>
)

}