import { StyleCard } from "./Styles";
import { Link } from "react-router-dom";

function Card({icone, titulo, descricao, botao, rota}) {
    return(
        <StyleCard>
            <i className={icone}></i>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <Link  className="button" to={rota}>{botao}</Link>
        </StyleCard>
    )
}

export default Card