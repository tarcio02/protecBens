import { GlobalStyles } from "./GlobalStyles"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer/Index"
import Mapa from "./routes/Mapa/Index"
import Pacotes from "./routes/Rastreamento/Index"
import Pagamentos from "./routes/Pagamentos/Index"
import Cadastro from "./routes/Cadastro/Index"
import Rastreio from "./routes/Rastreio/Index"

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Mapa/>}/>
        <Route path="/pacote" element={<Pacotes/>}/>
        <Route path="/rastreio" element={<Rastreio/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/pacote/pagamentos" element={<Pagamentos/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
