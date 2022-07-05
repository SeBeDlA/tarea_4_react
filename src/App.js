import Products from './components/Products';
import { Product } from './components/Product';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/details/:idProduct" element={<Product />} />
        <Route path="/categoria/:categoryId" element={<Products />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
