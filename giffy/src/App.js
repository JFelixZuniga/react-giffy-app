import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  //useState: devuelve una array de 2 posiciones
  const [gifs, setGifs] = useState([]) 

  //useEffect: permite ejecutar una función de forma totalmente arbitraria. Se ejecutará cada vez que se renderiza el componente
  useEffect(function() {
    getGifs({keyword: 'rick'}).then(gifs => setGifs(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGifs => <img src={singleGifs}/>)
        }

      </section>
    </div>
  );
}

export default App;
