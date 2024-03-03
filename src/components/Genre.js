import React from 'react';

function Genre({genre}){
    
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {genre.equipo} <br></br> Productos: {genre.cantidad}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;