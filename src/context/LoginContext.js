import { createContext, useState } from "react";




export const LoginContext=createContext();

const MockUsers=[{
    id:1,
    email:"admin1@admin1.com",
    password:"1234"
    },
{
    id:2,
    email:"admin2@admin1.com",
    password:"1234"
    },
{
    id:3,
    email:"admin3@admin1.com",
    password:"1234"
}
]

export const LoginProvider=({children})=>{
const [user, setUser]=useState({
    email:'',
    logged:false,
    
}

)

const login =(values)=>{

    const Match = MockUsers.find((user)=>user.email === values.email && user.password === values.password)

    if(Match){
        setUser({
            email:Match.email,
            logged:true
        })
    }
}

const logout = () => {
    setUser({
        email: null,
        logged: false
    })
}

    return(
        <LoginContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )

}