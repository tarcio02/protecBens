import { StyleMapa } from "./Styles";
import mapa from "../../imagens/mapa.png"

function Mapa() {
    return(
        <StyleMapa>
            <div className="titulo">
                <i class="fa-solid fa-magnifying-glass-location"></i>
                <h2>Rastreie Pessoas e veículos</h2>
                <p>Encontre pessoas e veículos em locais específicos</p>
            </div>
            <img src={mapa} alt="mapa" />
        </StyleMapa>
    )
}

export default Mapa