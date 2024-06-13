import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./Navber.css";
import Searcbar from "./Searchbar";

export default function Navbar() {
    const { color } = useTheme();

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
