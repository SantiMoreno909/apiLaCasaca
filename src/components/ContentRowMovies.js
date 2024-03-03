import React from 'react';
import SmallCard from './SmallCard';
import { useProduct } from '../hooks/useProducts';


function ContentRowTop(){

const {count}= useProduct();
const {countByCategory} = useProduct(); 

let productInDataBase = {
    color:   "primary",
    titulo: "Total de Usuarios",
    valor: 21,
    icono: "fas fa-user",
}

let user = {
    color:   "warning",
    titulo: "Total de Equipos",
    valor: Object.keys(countByCategory).length,
    icono: "fas fa-futbol",
}
   let amount ={
    color:   "success",
    titulo: "Total de Productos",
    valor: count,
    icono: "fas fa-tshirt",
    }


    let cardProps = [productInDataBase,amount,user];
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;