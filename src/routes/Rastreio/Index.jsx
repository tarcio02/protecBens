import Titulo from "../../components/Titulo/Index";
import { StyleRastreio } from "./Style";
import rastreio from "../../imagens/rastreio.svg"
import { Link } from "react-router-dom";

function Rastreio() {
    const dados = [
        {id: 1, obejeto: 'Carro (jpt-3993)', status: 'Não encontrado', Local: "---"},
        {id: 2, obejeto: 'Pessoa (Maria Ferreira)', status: 'Não encontrado', Local: "---"},
        {id: 3, obejeto: 'Pessoa (João Ferreira)', status: 'Rastreado', Local: "Praia do farol da barra, salvador - ba"}
    ]
    const titulo = "Painel de rastreio"
    const descricao = "Aqui você pode fazer requisições de rastreio, ou verificar se suas solicitações foram encontradas."
    return(
        <StyleRastreio>
            <Titulo icone={rastreio} titulo={titulo} descricao={descricao}/>
            <div className="painel">
                {dados.map( (obj) => (
                    <div key={obj.id} className="objeto">
                        <span className="info">{obj .obejeto}</span>
                        <span className="info">{obj.status}</span>
                        <Link className="button" to={"/informacao"}>
                            <i className="fa-solid fa-circle-info"></i>
                        </Link>
                    </div>
                )
                )}
            </div>
            <Link className="button" to={"/requisicao"}>Solicitar novo rastreio<i class="fa-solid fa-magnifying-glass"></i></Link>
        </ StyleRastreio>
        )
    }

    export default Rastreio