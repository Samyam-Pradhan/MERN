import { NavLink } from "react-router";
import "./Navbar.css";
import { useAuth } from "../store/auth";
const Navbar = () =>{
    const {isloggedIn} = useAuth();
    return<>
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">Samyam Pradhan</NavLink>
                </div>

                <nav>
    
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    
                
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    
                
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    
                
                        <li>
                            <NavLink to="/service">Services</NavLink>
                        </li>
                    
                
                        {isloggedIn ? (
                        <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>
                        ) : (
                        <>
                
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    
                
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                    </>
                        )}
                </nav>
            </div>
        </header>
    </>
}

export default Navbar;