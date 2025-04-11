import { StyleMenuNav } from "./Styles";
import { NavLink } from "react-router-dom";

function MenuNav(){
    return(
        <StyleMenuNav>
            <NavLink className={({ isActive }) => isActive ? 'desativo ativo' : 'desativo'} to="/">INÍCIO</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'desativo ativo' : 'desativo'} to="/servicos">SERVIÇOS</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'desativo ativo' : 'desativo'} to="/pacote">PACOTES</NavLink>
        </StyleMenuNav>
    )
}

export default MenuNav