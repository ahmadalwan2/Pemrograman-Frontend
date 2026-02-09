import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({}) {
    return (
        <nav className="navbar">
            <span className="logo-navbar">NusaGo</span>
            <ul>
                    <li>
                        <NavLink to={"/"} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"} className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"} className={({isActive}) => isActive ? "active" : ""}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/search"} className={({isActive}) => isActive ? "active" : ""}>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/place"} className={({isActive}) => isActive ? "active" : ""}>Places</NavLink>
                    </li>                                       
            </ul>
        </nav>
    )
}

export default Navbar;