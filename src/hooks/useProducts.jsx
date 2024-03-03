import { useState,useEffect } from 'react/cjs/react.development';
import { getProducts } from '../service/products.service';


const useProduct = ()=>{

    const [products,setProducts]= useState({count:0,countByCategory:{},productos:[]});
    useEffect(() => {
        async function fetchData(){
          const result = await getProducts();
          setProducts(result)
        }
        fetchData();
     },[])
     return {count:products.count,countByCategory:products.countByCategory,productos:products.productos}
}

export {useProduct};

