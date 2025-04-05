import { StyleMenuNav } from "./Styles";
import { NavLink } from "react-router-dom";

function MenuNav(){
    return(
        <StyleMenuNav>
            <NavLink className={({ isActive }) => isActive ? 'desativo ativo' : 'desativo'} to="/">MAPA</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'desativo ativo' : 'desativo'} to="/pacote">PACOTES</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'desativo ativo' : 'desativo'} to="/rastreio">RASTREIOS</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'desativo ativo' : 'desativo'} to="login">ACESSO</NavLink>
        </StyleMenuNav>
    )
}

export default MenuNav