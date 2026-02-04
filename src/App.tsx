import { Route, Routes } from 'react-router-dom'
import './App.css'
import Splash from './pages/Splash'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='home' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
