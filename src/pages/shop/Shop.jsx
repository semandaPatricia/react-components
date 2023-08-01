import React from 'react'
import {Bikinis} from '../../data/products'
import Product  from "./Product";
//import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>Acht Bikinis</h1>
    </div>

    <div className="products">
      {Bikinis.map((product) => (
        <Product data={product} />
      ))}
    </div>
  </div>
  )
}

export default Shop