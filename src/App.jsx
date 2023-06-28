import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddSubstractProductCart from './components/AddSubstractProductCart/AddSubstractProductCart'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import { Container } from '@mui/material'

function App() {

  return (
    <>
      <Container maxWidth="false">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
