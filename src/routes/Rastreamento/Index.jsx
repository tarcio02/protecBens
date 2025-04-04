import { StyleRastreamento } from "./Styles";
import Titulo from "../../components/Titulo/Index";
import rastreio from "../../imagens/rastreio.svg"
import { Link } from "react-router-dom";

function Rastreamento() {
    const titulo = "Escolha o seu pacote "
    const descricao = "Selecione uma pocete que mais lhe interesse, clique e faça o pagamento, depois é só rastrear"

    return(
        <StyleRastreamento>
            <Titulo icone={rastreio} titulo={titulo} descricao={descricao}/>
            <div className="cards">
                <div className="card">
                    <i className="fa-solid fa-magnifying-glass-location"></i>
                    <h3>Pacote básico</h3>
                    <p>No pacote básico você tem 5 rastreios por:</p>
                    <Link className="span" to="pagamentos">R$ 99.90</Link>
                </div>
                <div className="card">
                    <i className="fa-solid fa-chart-simple"></i>
                    <h3>Pacote médio</h3>
                    <p>No pacote médio você tem 10 rastreios por:</p>
                    <Link className="span" to="pagamentos">R$ 179.90</Link>
                </div>
                <div className="card">
                    <i className="fa-solid fa-ranking-star"></i>
                    <h3>Pacote premium</h3>
                    <p>No pacote premium você tem 20 rastreios por:</p>
                    <Link className="span" to="pagamentos">R$ 269.90</Link>
                </div>
            </div>
        </StyleRastreamento>
    )
}

export default Rastreamento