import "./RecipeList.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Transhcan from "../assets/transhcan.svg";
import { projectFirebasestore } from "../firebase/confige";
import { connection } from "mongoose";

export default function RecipeList({ recipes }) {
    const { mode } = useTheme();

    if (recipes.length === 0) {
        return <div className="error">No recipes to load....</div>;
    }

    const handleClick = (id) => {
        projectFirebasestore.collection("recipes").doc(id).delete();
    };

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img
                        className="delete"
                        src={Transhcan}
                        onClick={() => handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
    );
}
