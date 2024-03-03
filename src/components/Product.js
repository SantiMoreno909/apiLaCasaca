import React from 'react';
import { useProduct } from '../hooks/useProducts';
import ProductList from './ProductList'

function ProductsInDb(){

   const {productos}= useProduct();
   let datos= [];
   if (productos) {
     datos= productos;
   }

    return(
        <React.Fragment>
                 {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 ml-4 text-gray-800">Listado de Productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Equipo</th>
                                            <th>Descripcion</th>
                           
										</tr>
                                    {
                                    
                                        datos.map((key, index) => {
                                        return <ProductList item={key} key={index} />;
                                        })
                                
                                    }
									</thead>								
									<tbody>
										
										
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
			
			
        
    )
}
export default ProductsInDb;