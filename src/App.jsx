import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/Header"
import Footer from "./components/Footer/Index"
import Mapa from "./routes/Mapa/Index"

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Mapa />
      <Footer />
    </>
  )
}

export default App
