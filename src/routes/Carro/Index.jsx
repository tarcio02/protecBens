import { StyleCarro } from "./Styles";

function  Carro() {
    return(
        <StyleCarro>
            <h3>Insira os dados do seu veículo abaixo</h3>
            <input placeholder="Marca do veículo" type="text" />
            <input placeholder="Modelo" type="text" />
            <input placeholder="Placa" type="text" />
            <input placeholder="Cor" type="text" />
            <button>Enviar</button>
        </StyleCarro>
    )
}

export default Carro