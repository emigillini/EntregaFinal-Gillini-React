import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import Swal from 'sweetalert2'
import { Navigate } from "react-router"
import { db } from "../../firebase/config"
import { Link } from "react-router-dom"
import './Checkout.scss'



export const Checkout=()=>{

    const {cart, totalCarrito, vaciarCarrito}=useContext(CartContext)

    const [orderId, setOrderId]=useState(null)

    const [values, setValues]=useState({
        contacto:'x',
        email:'x',
        telefono:'x',
        direccion:'x'
    })
    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    }


    const handleSubmit=(e)=>{
        e.preventDefault()

        if(values.contacto.length<3){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Incorrecto, ingrese nuevamente su informacion de contacto",
                background:"#11f1a6",
                
            })
            return
        
        }
        if(values.email.length<3){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Incorrecto, ingrese nuevamente su email",
                background:"#11f1a6"
              })
              return
        }
        if(values.telefono.length<3 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Incorrecto, ingrese nuevamente su telefono",
                background:"#11f1a6"
              })
              return
        }
        if(values.direccion.length<3){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Incorrecto, ingrese nuevamente su direccion",
                background:"#11f1a6"
                
            })
            return
        }
       
    
        const orden ={
            cliente:values,
            items:cart,
            total:totalCarrito(),
            fechaYhora:new Date()
        }  

        const orderRef = collection(db, "orders")
        
        addDoc(orderRef, orden)
        .then((doc) =>{
            console.log(doc.id)
            setOrderId(doc.id)
            
        })
    
    }
    
    if(orderId){
        return(
                <div className="container my-5 " >
                    <h2>Orden Registrada Exitosamente</h2>
                    <p>Guarda tu numero de orden: <strong>{orderId}</strong></p>
                    <hr/>
                    <h3>Tu compra</h3>
                    <Link onClick={vaciarCarrito} to={"/"} className="btn btn-primary ver_mas">Terminar</Link>
                    <hr/>
                   
                    {cart.map((item) => (
                <div  key={item.id} className="container_final">
                    <div >
                  <h4>{item.name}</h4>
                  <img className="cart_img" src={item.img} alt={"imagen taza"} />
                  <div>
                    <small>
                      Cantidad: {item.cantidad} -- Precio x un: ${item.precio}
                    </small>
                  </div>
                  </div>
                  
                 
                  
                </div>
              ))}
                    
                    
                </div>

        )
    }
    if(cart.length === 0){
        return <Navigate to="/"/>
        } 

    return(

        
        <div className="login_container ">
        <div className="login">
        <h2>Para terminar la compra ingrese los siguientes datos</h2>
        <hr/>

                <form onSubmit={handleSubmit}>

                <input
                        name='contacto'
                        onChange={handleChange}
                        value={values.contacto}
                        type={"text"}
                        className= "form-control my-2"
                        placeholder="Ingrese su nombre y apellido"
                        />
                    <input
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        type={"text"}
                        className= "form-control my-2"
                        placeholder="Ingrese su e-mail"
                        />
                      
                    <input
                        name='telefono'
                        onChange={handleChange}
                        value={values.telefono}
                        type={"text"}
                        className= "form-control my-2"
                        placeholder="Ingrese su numero de telefono"
                        />
                         <input
                        name='direccion'
                        onChange={handleChange}
                        value={values.direccion}
                        type={"text"}
                        className= "form-control my-2"
                        placeholder="Ingrese domicilio de entrega"
                        />

                    <button className="btn btn-primary ver_mas m-2" type="submit">Ingresar con mi informacion</button>
                      
                    

                </form>
            
                    
        </div>
    </div>
    )

}