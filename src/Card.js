import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './App.css';
export default function Card(props) {
  const navigate = useNavigate();

  return (
    <div className="product">
      <img src={props.image} alt="imagen" className="product-img" />
      <p>{props.name}</p>
      <p>${props.cost}</p>
      <p>id = {props.id}</p>
      {/* <Link to={`/details/${props.id}`}>Ver detalles</Link> */}
      {/* <Link to="/details/138">
        <button>Ver detalles</button>
      </Link> */}
      <button onClick={() => navigate(`/details/${props.id}`)}>Ver detalles</button>
    </div>
  );
}
