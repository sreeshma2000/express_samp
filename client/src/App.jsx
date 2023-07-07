import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/home" exact element={<Home/>}></Route>
      <Route path="/login" exact element={<Login/>}></Route>
      <Route path="/register" exact element={<Register/>}></Route>


     </Routes>
    </>
  )
}

export default App
