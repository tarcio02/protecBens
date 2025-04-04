import Titulo from "../../components/Titulo/Index";
import { StylePagamentos } from "./Styles";
import pagamento from "../../imagens/pagamento.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
function Pagamentos() {
    const titulo = "Pacote premium - Valor a pagar R$ 219,90"

    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
      const anos = Array.from({ length: 100 }, (_, i) => 2025 + i); // últimos 100 anos
    
    return(
        <StylePagamentos>
            <Titulo icone={pagamento} titulo={titulo} />
            <div className="pagamento">
                <div className="nome">
                    <input type="text" placeholder="Nome no cartão"/>
                </div>
                <div className="numero">
                    <input className="cartao" type="number" placeholder="Número cartão" />
                    <input className="cvv" type="number" placeholder="CVV" />
                </div>
                <div className="data">
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
                <button>Finalizar pagamento</button>
                <Link className="span" to="/pacote">
                    Voltar para opções de pacote
                    <i class="fa-solid fa-arrow-left"></i>
                </Link>
            </div>
            
        </StylePagamentos>
    )
}

export default Pagamentos