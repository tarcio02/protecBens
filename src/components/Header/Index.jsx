import { StyleHeader } from "./Styles";
import MenuNav from "../MenuNav/Index";
import logo from "../../imagens/logo.png"
import { NavLink } from "react-router-dom";

function Header(){

    return(
        <StyleHeader>
            <div className="container">
                <img src={logo} alt="logo protec-bens" />
                <div className="container">
                    <MenuNav />
                </div>
            </div>
            <NavLink  className={"button"} to="/rastreio">Àrea do Investigador<i class="fa-solid fa-shoe-prints"></i></NavLink>
        </StyleHeader>
    )
}

export default Header