import React from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Shop } from "./pages/shop/Shop";
//import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/Cart";
//import { ShopContextProvider } from "./context/shop-context";


//import Form from './Components/Form'

function App() {
  

  return (
   /* <>
     <Form/>
    
    </>
    */

    <div className="App">
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      
    </div>

  )
}

export default App
