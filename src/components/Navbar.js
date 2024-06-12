import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Navber.css";
import Searcbar from "./Searchbar";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    const { color } = useContext(ThemeContext);

    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Coooking Ninja</h1>
                </Link>
                <Searcbar />
                <Link to="/create"> Create Recipe</Link>
            </nav>
        </div>
    );
}
