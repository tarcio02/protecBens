import { StyleMapa } from "./Styles";
import mapa from "../../imagens/mapa.png"
import Titulo from "../../components/Titulo/Index";

function Mapa() {
    const titulo = "Rastreie Pessoas e veículos"
    const descricao = "Encontre pessoas e veículos em locais específicos"
    return(
        <StyleMapa>
            <Titulo icone={"fa-solid fa-magnifying-glass-location"} titulo={titulo} descricao={descricao}/>
            <img src={mapa} alt="mapa" />
        </StyleMapa>
    )
}

export default Mapa