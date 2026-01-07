import "./Navbar.css";

function Navbar({}) {
    return (
        <nav className="navbar">
            <span className="logo-navbar">NusaGo</span>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;