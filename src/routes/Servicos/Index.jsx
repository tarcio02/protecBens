import { StyleServicos } from "./Styles";
import Titulo from "../../components/Titulo/Index";
import carro  from "../../imagens/carro.svg"
import usuario from "../../imagens/usuario.svg"
import investigador from "../../imagens/investigador.svg"
import maps from "../../imagens/maps.svg"


function Servicos() {
    const tituloPessoa = "Rastreie pessoas";
    const descPessoa = "Faça requisições de rastreios de pessoas, inserindo apenas uma foto";
    const tituloCarro = "Rastreie de veículos";
    const descCarro = "Com apenas poucos dados você pode rastrear um veículo";
    
    return(
        <StyleServicos>
            <div className="container">
                <Titulo icone={usuario} titulo={tituloPessoa} descricao={descPessoa}/>
                <div className="text">
                    <img className="left" src={investigador} alt={investigador} />
                    <div className="texto rigth">
                        <h3>Descubra onde determinada pessoa esteve</h3>
                        <p>
                            Identifique o paradeiro de determinada pessoa, basta
                            realizar uma requisição de rastreio, iserir uma foto 
                            da pessoa e aguarda uma de nossas câmeras indetifica-la, 
                            e assim que a pessoa for encotrada você irá receber uma 
                            notificação com o lacal e hora exata do rastreio.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <Titulo icone={carro} titulo={tituloCarro} descricao={descCarro} />
                <div className="text carro">
                    <div className="texto left">
                        <h3>Localize veículos</h3>
                        <p>
                            Localize um veículo com precisão, faça uma requisição e rastreio
                            inserindo alguns dados do veículo buscado e após basta
                            aguarda a notificação de rastreio, todos seus rastreios
                            irá ficar armazenado na área do investigador.
                        </p>
                    </div>
                    <img className="rigth" src={maps} alt={maps} />
                </div>
            </div>
        </StyleServicos>
    )
}


export default Servicos