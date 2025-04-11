import { StyleMapa } from "./Styles";
import mapa from "../../imagens/mapa.png"
import Titulo from "../../components/Titulo/Index";
import destino from "../../imagens/destino.svg"
import rastreio from "../../imagens/rastreio.svg"
import Card from "../../components/Card/Index";

function Modelo() {
    const titulo = "Rastreie Pessoas e veículos"
    const descricao = "Encontre pessoas e veículos em locais específicos"

    const descricaoCard1 = "Caso não tenha um cadastro nem nossa plataforma clique no botão abaixo e realize seu cadastro"
    const descricaoCard2 = "Clique no botão abaixo e escolha um pacote de srviço e comece a usar"
    const descricaoCard3 = "Agora é só explorar, clique no botão abaixo e faça uma requisição de rastreio de uma pessoa ou objeto." 
    return(
        <StyleMapa>
            <Titulo icone={destino} titulo={titulo} descricao={descricao}/>
            <img src={mapa} alt="mapa" />
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
        </StyleMapa>
    )
}


export default Modelo