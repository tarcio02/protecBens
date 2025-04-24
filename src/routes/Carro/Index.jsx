import { StyleCarro } from "./Style";

function Carro() {
    return(
        <StyleCarro>
            <div className="pl-ca">
                <input placeholder="Placa" type="text" />
                <input placeholder="Marca" type="text" />
            </div>
            <div className="mo-co">
                <input placeholder="Modelo" type="text" />
                <input placeholder="Cor" type="text" />
            </div>
            <button>Rastrear</button>
        </StyleCarro>
    )

}

export default Carro