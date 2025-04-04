import Titulo from "../../components/Titulo/Index";
import { StyleRastreio } from "./Styles";
import rastreio from "../../imagens/rastreio.svg"

function Rastreio() {
    const dados = [
        {id: 1, obejeto: 'Carro (jpt-3993)', status: 'Não encontrado', Local: "---"},
        {id: 2, obejeto: 'Pessoa', status: 'Não encontrado', Local: "---"},
        {id: 3, obejeto: 'Pessoa', status: 'Rastreado', Local: "Praia do farol da barra, salvador - ba"}
    ]
    const titulo = "Painel de rastreio"
    const descricao = "Aqui você pode fazer requisições de rastreio, ou verificar se suas solicitações foram encontradas."
    return(
        <StyleRastreio>
            <Titulo icone={rastreio} titulo={titulo} descricao={descricao}/>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Objeto</th>
                        <th>Status</th>
                        <th>Local</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((obj) => (
                        <tr key={obj.id}>
                            <td>{obj.obejeto}</td>
                            <td>{obj.status}</td>
                            <td>{obj.Local}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <button>Solicitar novo rastreio<i class="fa-solid fa-magnifying-glass"></i></button>
        </StyleRastreio>
    )
}

export default Rastreio