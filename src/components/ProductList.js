import React from 'react';

function Producto({item}){

    return (
        <React.Fragment>
                <tr>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.equipo}</td>
				<td>{item.description}</td>
			</tr>    
        </React.Fragment>
    )

}
export default Producto;