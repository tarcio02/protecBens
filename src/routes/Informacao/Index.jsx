import { StyleInformacao } from "./Style";
import carro from "../../imagens/carro.svg"
import Titulo from "../../components/Titulo/Index";
import maps from "../../imagens/maps.svg";
import mapa from "../../imagens/mapa.png"

function Informacao() {
    const titulo = "Informações do rastreio"
    const dados = [
        {id: "placa/nome", cor: "cor", marca: "marca", modelo: "modelo"}
    ]

    return (
        <StyleInformacao>
            <Titulo titulo={titulo} icone={maps}/>
            <div className="container">
                <div className="dados">
                    <h3>Dados do Veículo</h3>
                    <div className="dadosVeiculo">
                        <div className="img">
                            <img src={carro} alt="carro"a />
                        </div>
                        <ul>
                            {dados.map( (obj) => (
                                <>
                                    <li>{obj.id}</li>
                                    <li>{obj.cor}</li>
                                    <li>{obj.marca}</li>
                                    <li>{obj.modelo}</li>
                                </>
                            )
                            )}
                        </ul>
                    </div>
                </div>
                <div className="dados">
                    <h3>Dados da localização</h3>
                    <div className="dadosLocal">
                        <div className="imagens">
                            <img src={mapa} alt="localização" /><img src="" alt="" />
                            <img src={carro} alt="foto da camera" />
                        </div>
                        <div className="localizacao">
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                Info de localizacao
                            </span>
                            <span>
                                <i class="fa-regular fa-calendar"></i>
                                data e hora
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </StyleInformacao>
    )
}

export default Informacao