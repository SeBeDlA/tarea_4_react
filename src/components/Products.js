import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Card from '../Card';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams() 

  async function getProducts(idCategoria = null) {
    const url = idCategoria != null ? `https://pg-delsur.herokuapp.com/products?categoryId=${idCategoria}`:`https://pg-delsur.herokuapp.com/products` 
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log('Hubo un problema con la petición Fetch:' + error.message));
  }

  useEffect(() => {
    getProducts(categoryId);
  }, [categoryId]);

  return (
    <div className="container">
      <div className="products">
        {products?.length > 0 ? (
          products?.map((product) => {
            return <Card name={product.name} id={product.id} cost={product.cost} key={product.id} image={product.image[0]}></Card>;
          })
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
}
