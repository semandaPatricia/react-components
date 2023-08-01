import React from 'react';
import Navbar from './Components/Navbar'
import { Shop } from "./pages/shop/Shop";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";


function App() {
  

  return (
  
<>
<ShopContextProvider>
<Navbar />
<Shop />
<Contact />
  <Cart />
</ShopContextProvider>

</>
    
        
         
          
      
    

  )
}

export default App
