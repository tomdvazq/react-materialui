import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Container } from '@mui/material';
import ProductoDetailContainer from './components/ProductoDetailContainer/ProductoDetailContainer';
import { CarritoProvider } from './context/CarritoContext';
import ProductosContainer from './components/ProductosContainer/ProductosContainer'

const navArrayLinks = [
  {
      title: 'Home',
      path: '/',
      icon: <HomeIcon/>
  },
  {
    title: 'Boxes',
    path: '/categoria/boxes',
    icon: <LoginIcon/>
  },
  {
    title: 'Skins',
    path: '/categoria/skins',
    icon: <LoginIcon/>
  },
  {
    title: 'Stickers',
    path: '/categoria/stickers',
    icon: <LoginIcon/>
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
      <CarritoProvider>
        <Navbar navArrayLinks={navArrayLinks}/>
          <Container maxWidth="false">
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/producto/:idProd' element={<ProductoDetailContainer/>}/>
                <Route path='/categoria/:categoria' element={<ProductosContainer/>}/>
              </Routes>
          </Container>
      </CarritoProvider>
    </>
  )
}

export default App
