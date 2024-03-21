import "../../src/assets/css/NavBar.css";
import { Link } from "react-router-dom"
import logo from "../../src/assets/images/twenLogo.webp"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="logo" className="logo" />
                    TWEN Booking Application
                </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/meet" className="sub-nav-meeting">
                    <i className="calender-icon"></i>
                        Meeting
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="sub-nav-about">About Us</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;