import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({}) {
    return (
        <nav className="navbar">
            <span className="logo-navbar">Ahgoda</span>
            <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/search"}>Search</NavLink>
                    </li>                    
            </ul>
        </nav>
    )
}

export default Navbar;