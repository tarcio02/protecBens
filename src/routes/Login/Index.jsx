import { StyleLogin } from "./Styles";
import Titulo from "../../components/Titulo/Index";
import usuario from "../../imagens/usuario.svg"
import { Link } from "react-router-dom";

function Login() {
    const titulo = "Entre em sua conta"
    const descricao = "Insira seus dados abaixo para acessar sua conta"
    return(
        <StyleLogin>
            <Titulo icone={usuario} titulo={titulo} descricao={descricao}/>
            <input placeholder="Nome" type="text" />
            <input placeholder="Email" type="text" />
            <input placeholder="Senha" type="password" />
            <button>Entrar</button>
            <Link to={"/cadastro"} className="span">Ainda não tenho um cadastro</Link>
        </StyleLogin>
    )
}

export default Login