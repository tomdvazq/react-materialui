import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddSubstractProductCart from './components/AddSubstractProductCart/AddSubstractProductCart'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Container } from '@mui/material'


const navArrayLinks = [
  {
      title: 'Home',
      path: '/',
      icon: <HomeIcon/>
  },
  {
      title: 'Login',
      path: '/login',
      icon: <LoginIcon/>
  },
  {
      title: 'Register',
      path: '/register',
      icon: <HowToRegIcon/>
  },
];

function App() {

  return (
    <>
    <Navbar navArrayLinks={navArrayLinks}/>
    <Container maxWidth="false">
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
