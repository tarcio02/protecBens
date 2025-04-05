import Titulo from "../../components/Titulo/Index";
import { StyleCadastro } from "./Styles";
import usuario from "../../imagens/usuario.svg"
import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
    const titulo = "Cadastre-se" 
    const descricao = "Insira seus dados abaixo para realizar seu cadastro"

    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
      const anos = Array.from({ length: 100 }, (_, i) => 2025 + i); // últimos 100 anos
    
    return(
        <StyleCadastro>
            <Titulo icone={usuario} titulo={titulo} descricao={descricao}/>
            <div className="inputs">
                <div className="strings">
                    <input placeholder="Nome completo" type="text" />
                    <input placeholder="Email" type="text" />
                    <input placeholder="Senha" type="text" />
                </div>
                <div className="data">
                    <p>Data de nascimento</p>
                    <div className="container">
                        <input className="dia" placeholder="Dia" type="number" />
                        <select className="mes" value={mes} onChange={(e) => setMes(e.target.value)}>
                            <option>Mês</option>
                            {meses.map((m, i) => (
                                <option key={i} value={i + 1}>{m}</option>
                            ))}
                        </select>
                        <select className="ano" value={ano} onChange={(e) => setAno(e.target.value)}>
                            <option>Ano</option>
                            {anos.map((a) => (
                                <option key={a} value={a}>{a}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button>Me cadastrar</button>
                <Link to={"/login"} className="span">Já tenho uma conta, quero entrar!</Link>
            </div>
        </StyleCadastro>
    )
}

export default Cadastro