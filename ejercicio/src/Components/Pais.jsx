import React from 'react';

const Pais = ({imagen, nombre, region, subregion}) => {
    return ( 
        <div className="col-12 col-md-4 my-2">
            <div className="card">
                <div className="card-body">
                    <img src={imagen} className="img-fluid" />   
                </div>
                <div className="card-footer text-center">
                    <h4>{nombre}</h4>
                    <h5>{region}</h5>
                    <h6>{subregion}</h6>
                </div>
            </div>
        </div>
     );
}
 
export default Pais;