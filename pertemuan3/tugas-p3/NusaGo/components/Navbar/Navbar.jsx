import "./Navbar.css";

function Navbar({}) {
    return (
        <nav className="navbar">
            <span className="logo-navbar">Ahgoda</span>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#footer">FAQ</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;