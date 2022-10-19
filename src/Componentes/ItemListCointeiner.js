import React from "react";
import Img from "../images/logo512.png"


function ItemListContainer(props) {
  return (
    <>
      <div class="grid">
        <img src={Img} alt="" className="img-card"/>
        <h1 class="body-title">Hola, soy un {props.texto}</h1>
        <p class="body-content">{props.descripcion}</p>
        <button class="btn btn-comprar">comprar</button>
      </div>
    </>
  );
}

export default ItemListContainer