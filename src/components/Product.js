import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const [product, setProduct] = useState({});
  const { idProduct } = useParams();

  async function getProductById() {
    await fetch(`https://pg-delsur.herokuapp.com/products/${idProduct}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  useEffect(() => {
    // getProducts().then((data) => setProducts(data));
    getProductById();
  }, []);

  return (
    <>
      <h2>Detalles del producto</h2>
      {product.name}
    </>
  );
};
