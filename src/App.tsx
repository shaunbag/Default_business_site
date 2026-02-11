import { Route, Routes } from 'react-router-dom'
import './App.css'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ItemPage from './shopComponents/ItemPage'
import Cart from './shopComponents/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='home' element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='item/:id' element={<ItemPage />}/>
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
