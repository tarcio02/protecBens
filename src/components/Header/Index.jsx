import { StyleHeader } from "./Styles";
import MenuNav from "../MenuNav/Index";
import logo from "../../imagens/logo.png"
import { NavLink } from "react-router-dom";

function Header(){

    return(
        <StyleHeader>
            <img src={logo} alt="logo protec-bens" />
            <div className="container">
                <MenuNav />
            </div>
            <NavLink  className={"button"} to="/login">Àrea do cliente</NavLink>
        </StyleHeader>
    )
}

export default Header