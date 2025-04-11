import { StyleRequisicao } from "./Styles"; 
import Titulo from "../../components/Titulo/Index";
import rastreio from "../../imagens/rastreio.svg"
import { useState } from "react";
import Pessoa from "../Pessoa/Index";
import Carro from "../carro/Index";
import { Link } from "react-router-dom";

function Requisicao() {
    const titulo = "O que você deseja rastrear?"
    const descricao = "Insira abaixo os dados do carro ou uma foto da pessoa"

    const [objeto, setObjeto] = useState('');
    
        const objetos = [
            'Pessoa', 'Carro'
        ];

        function renderMensagem(obj) {
            if (obj === 'Pessoa') return <Pessoa />;
            if (obj === 'Carro') return <Carro />;
            return <div></div>;
        }

    return(
        <StyleRequisicao>
            <Titulo icone={rastreio} titulo={titulo} descricao={descricao} />
            <div className="container">
                <select className="objeto" value={objeto} onChange={(e) => setObjeto(e.target.value)}>
                <option>Objeto:</option>
                    {objetos.map((o, i) => (
                        <option key={i} value={o} >{o}</option>
                    ))}
                </select>
            </div>
            {renderMensagem(objeto)}
        </StyleRequisicao>
    )
}

export default Requisicao
