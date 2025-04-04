import { StyleHeader } from "./Styles";
import MenuNav from "../MenuNav/Index";
import logo from "../../imagens/logo.png"

function Header(){

    return(
        <StyleHeader>
            <img src={logo} alt="logo protec-bens" />
            <div className="container">
                <MenuNav />
            </div>
        </StyleHeader>
    )
}

export default Header