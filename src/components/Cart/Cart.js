import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => ( 
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.img} alt={"imagen taza"}/>
                        <div>
                            <small>Cantidad: {item.cantidad} Precio un: {item.precio}</small>
                        </div>
                        <p>Precio total: {item.precio * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn btn-danger">borrar</button>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
        </div>
    )
}

