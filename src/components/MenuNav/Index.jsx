import { StyleMenuNav } from "./Styles";
import { Link } from "react-router-dom";

function MenuNav(){
    return(
        <StyleMenuNav>
            <Link to="/">MAPA</Link>
            <Link to="/pacote">PACOTES</Link>
            <Link to="/rastreio">RASTREIOS</Link>
            <Link to="cadastro">ACESSO</Link>
        </StyleMenuNav>
    )
}

export default MenuNav