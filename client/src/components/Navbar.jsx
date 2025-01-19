import { NavLink } from "react-router";
import "./Navbar.css";
const Navbar = () =>{
    return<>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">Samyam Pradhan</NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/service">Services</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}

export default Navbar;