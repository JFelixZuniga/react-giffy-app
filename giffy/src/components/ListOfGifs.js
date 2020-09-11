import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params
  //useState: devuelve una array de 2 posiciones
  const [gifs, setGifs] = useState([]);

  //useEffect: permite ejecutar una función de forma totalmente arbitraria. Se ejecutará cada vez que se renderiza el componente
  useEffect(function () {
      //Llamaos a getGifs, una vez obtenidos los gifs actualizamos el estado
    getGifs({ keyword }).then((gifs) => setGifs(gifs))
  }, [keyword]);

  return <div>
    {
      gifs.map(({ id, title, url }) => 
        <Gif 
          id={id} 
          key={id} 
          title={title} 
          url={url} 
        />
      )
    }
  </div>
}
