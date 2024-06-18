import { link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import "./RecipeList.css";

export default function RecipeList(recipes) {
    const {mode} = useTheme();

    if (recipes.length === 0){
        return <div className="error">No recipes to load...</div>
    }
}
