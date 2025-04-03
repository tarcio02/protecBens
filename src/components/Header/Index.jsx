import { StyleHeader } from "./Styles";
import MenuNav from "../MenuNav/Index";
import logo from "../../imagens/logo.png"

function Header(){
    return(
        <StyleHeader>
            <img src={logo} alt="logo protec-bens" />
            <MenuNav />
        </StyleHeader>
    )
}

export default Header