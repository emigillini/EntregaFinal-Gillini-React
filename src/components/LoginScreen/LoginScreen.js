import { useContext, useState } from 'react'
import './LoginScreen.scss'

import Swal from 'sweetalert2'
import { LoginContext } from '../../context/LoginContext'


export const LoginScreen=()=>{

   const {login} = useContext(LoginContext)


    const [values, setValues] = useState({
        email:"",
        password:"",
        
        
    }
    )
   
    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        login(values)
        
        
    }
  
    const redirigirLogin=()=>{
        window.location.href = '/LoginScreen';

    }
    const alerta = ()=>{
        Swal.fire({
            title: 'Estas ingresando al Market Place',
            text: "Confirme para ingresar",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ingresar'
        }).then((result) => {
            if (result.isConfirmed) {
            Swal.fire(
                'Bienvenido',
                'Carolinska tu mundo',
                'success'
            )
            }else if(result.dismiss === Swal.DismissReason.cancel){
                redirigirLogin();
            
            }
        })
    }




return(

    <div className="login_container ">
        <div className="login">
            <h2>Bienvenido ingrese su informacion</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        type={"email"}
                        className= "form-control my-2"
                        placeholder="Ingrese su e-mail"
                        />
                    <input
                        name='password'
                        onChange={handleChange}
                        value={values.password}
                        type={"password"}
                        className= "form-control my-2"
                        placeholder="Ingrese su password"
                        />

                    <button className="btn btn-primary ver_mas m-2" onClick={alerta} type="submit">Ingresar con mi informacion</button>
                      
                    

                </form>
            
                    
        </div>
    </div>
        
)
}