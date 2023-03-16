import { useEffect, useState } from "react"
import { CardProducto } from "../CardProducto/CardProducto";



export const Pokeappi=()=>{

    const  [ pokemon, setPokemon]=useState(null);
    console.log(pokemon)

    useEffect(()=>{
        fetch ( `https://pokeapi.co/api/v2/pokemon/ditto`)
            .then((res)=>
            res.json)
            .then((data)=>{
                setPokemon(data)
            })
            .catch((error)=>{
                alert(error)
            })


    },[])

    return(
        <CardProducto title={pokemon.name} text={pokemon.name} img={pokemon.sprite.front_default}/>




    )
}