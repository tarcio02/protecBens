import { StylePessoa } from "./Styles";
import usuario from "../../imagens/usuario.svg"
import { useState } from "react";

function Pessoa() {

    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const [nome, setNome] = useState()

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setImage(file);
        setPreview(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        setNome(e.target.value);
    };

    return(
        <StylePessoa>
            <h3>Insira abaixo os dados da pessoa</h3>
            <div className="input">
            <input value={nome} onChange={handleChange} placeholder="Insira o nome" type="text" />
                <label htmlFor="imagemUpload" className="botao-upload">
                    Escolher imagem
                </label>
                <input id="imagemUpload" type="file" accept="image/*" onChange={handleImageChange}/>
            </div>
            <div className="pre">
                {
                    preview && image ? <img src={preview} alt="preview da pessoa"/> : <img src={usuario} />
                }
                {
                    nome ? <p>{nome}</p> : <p></p>
                }

            </div>
        </StylePessoa>
    )
}

export default Pessoa