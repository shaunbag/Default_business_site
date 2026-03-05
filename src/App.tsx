import { Route, Routes } from 'react-router-dom'
import './App.css'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ItemPage from './shopComponents/ItemPage'
import Cart from './shopComponents/Cart'
import { useEffect } from 'react'
import { useShopStore } from './store'
import Checkout from './shopComponents/Checkout'

function App() {

  const { addItems } = useShopStore();
  
   useEffect(() => {
          const fetchItems = async () => {
              try {
                  const response = await fetch("https://fakestoreapi.com/products");
                  if(!response.ok){
                      throw new Error("Failed to fetch items");
                  }
                  
                  const data = await response.json();
                  addItems(data);
              } catch(error){
                  console.error("Error fetching items:", error);
              }
          }
          fetchItems();
      },[addItems])
      
  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='home' element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='item/:id' element={<ItemPage />}/>
        <Route path='cart' element={<Cart className="cart-container"/>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
