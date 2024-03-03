import React from 'react';
import Genre  from './Genre';
import { useProduct } from '../hooks/useProducts';




function GenresInDb(){

   const {countByCategory}= useProduct();
   let datos= [];
   if (countByCategory) {
       datos= Object.keys(countByCategory);
   }
   
  
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Equipos Registrados</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    datos.map((key, index) => {
                                        return <Genre genre={{equipo:key,cantidad:countByCategory[key]}}  key={index} />;
                                    })
                                    
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default GenresInDb;