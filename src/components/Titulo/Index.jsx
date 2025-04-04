import { StyleTitulo } from "./Styles";

function Titulo({icone, titulo, descricao}) {
    return(
        <StyleTitulo>
            <img src={icone} alt={"ícone de" + icone} />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </StyleTitulo>
    )
}

export default Titulo