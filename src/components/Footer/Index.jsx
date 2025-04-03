import { StyleFooter } from "./Styles";
import logo from "../../imagens/logo.png"

function Footer() {
    return(
        <StyleFooter>
            <img src={logo} alt="Logo Protec-bens" />
            <p>
                © 2025 Protec Bens - Todos os direitos reservados - Desenvolvido por  
                <a href="https://www.instagram.com/star_teix/">
                Tárcio Teixeira
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </p>
        </StyleFooter>
    )
}

export default Footer