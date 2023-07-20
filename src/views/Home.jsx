import { Container } from "@mui/material"
import ProductosContainer from "../components/ProductosContainer/ProductosContainer"
import '../views/Home.css'

const Home = () => {
  return (
    <>
      <Container className="containerHome">
        <ProductosContainer/>
      </Container>
    </>
  )
}

export default Home