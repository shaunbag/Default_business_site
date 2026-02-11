import { Route, Routes } from 'react-router-dom'
import './App.css'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='home' element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
      </Routes>
    </>
  )
}

export default App
