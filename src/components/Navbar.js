import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <Link to="/">
        <span>Home</span>
      </Link>
      |
      <Link to="/categoria/1">
        <span>Vinos</span>
      </Link>
      |
      <Link to="/categoria/2">
        <span>Espumantes</span>
      </Link>
      <hr />
    </>
  );
};
