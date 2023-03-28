import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { pedirProd } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { ColorRing } from "react-loader-spinner"
import './ItemDetailContainer.scss'


export const ItemDetailContainer=()=>{
    const [item, SetItem]= useState(null)
    const [loading, SetLoading]= useState(true)
    const {itemId} =useParams()

    useEffect(()=>{
    SetLoading(true)

    pedirProd()
        .then((res)=>{
            SetItem(res.find((prod)=> prod.id === Number(itemId)))
        })
        .finally(()=>{
            SetLoading(false)
        })

},[itemId]);

return(
    <div className="container my-5 ver">
        {
            loading
            ?<div>
            <br/>
            <br/>
            <br/>
            <ColorRing height={250} width={250} />
            </div>
            :<ItemDetail item={item}/>
        }

    </div>
    )
}

