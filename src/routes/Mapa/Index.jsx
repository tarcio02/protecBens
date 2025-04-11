import { StyleInicio } from "./Styles"
import logo from "../../imagens/logo.png"
import rastreio from "../../imagens/rastreio.svg"
import Card from "../../components/Card/Index"
import Titulo from "../../components/Titulo/Index"

function Mapa() {
    const descricaoCard1 = "Caso não tenha um cadastro nem nossa plataforma clique no botão abaixo e realize seu cadastro"
    const descricaoCard2 = "Clique no botão abaixo e escolha um pacote de srviço e comece a usar"
    const descricaoCard3 = "Agora é só explorar, clique no botão abaixo e faça uma requisição de rastreio de uma pessoa ou objeto." 

    return(
        <StyleInicio>
            <div className="container">
                <div className="texto">
                    <h3>ProtecBens <span>rastreios e monitoramento</span></h3>
                    <p>
                        Rastreios de veículos e pessoas, monitoramento eletrônico -
                        Compromisso com a sua necessidade.
                    </p>
                    <div className="social">
                        <i className="fa-brands fa-whatsapp"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <img className="imagem" src={logo} alt="logo" />
            </div>
            <div className="cardContainer">
                <Titulo icone={rastreio} titulo={"Como rastrear"} descricao={"Siga o passo a passo abaico e rastreie Pessoa e veículos"}/>
                <div className="cards">
                    <Card icone={"fa-solid fa-user"}
                        titulo={"1. Cadastre-se ou faça login"} 
                        descricao={descricaoCard1}
                        rota={"/cadastro"}
                        botao={"Cadastre-se"}
                    />
                    <Card icone={"fa-solid fa-credit-card"}
                        titulo={"2. Adquira um pacote de serviço"} 
                        descricao={descricaoCard2}
                        rota={"/pacote"}
                        botao={"Pacotes"}
                    />
                    <Card icone={"fa-solid fa-map-location"}
                        titulo={"3. Comece a rastrear"} 
                        descricao={descricaoCard3}
                        rota={"/rastreio"}
                        botao={"Rastreio"}
                    />
                </div>
            </div>
        </StyleInicio>
)
}

export default Mapa