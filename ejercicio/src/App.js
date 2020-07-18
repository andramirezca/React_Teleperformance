import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Pais from './Components/Pais';

function App() {

  const [paises, setpaises] = useState([])
  
  const ConsultarAPI = () => {
    fetch('/all',{
      method: "GET",
      headers: {
        "Content-Type":"Application/json"
      }
    }).then(res => res.json())
    .then(data =>{
      setpaises(data)
      console.log(data[0].flag)
    })
  }

  useEffect(() => {
    ConsultarAPI()
  }, [])


  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white h4">Listado Países</div>
            <div className="card-body">
              <div className="row">
                {
                  paises.map(pais =>(
                    <Pais 
                      key={pais.alpha2Code}
                      imagen={pais.flag}
                      nombre={pais.name}
                      region={pais.region}
                      subregion={pais.subregion}
                    />
                  ))
                }
              </div>
            </div>
            <div className="card-footer h5 text-right"><i>Andres Ramirez</i></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
