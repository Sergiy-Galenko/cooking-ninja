import "./Create.css";
import { useState, useRef, useEffect } from "react";
import { projectFirebasestore } from "../firebase/confige";

export default function Create() {
    const [title, setTitle] = useState("");
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [newIngredients, setNewIngredients] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const doc = {
            title,
            ingredients,
            method,
            cookingTime: cookingTime + "minutes",
        };
        try {
            projectFirebasestore.collection("recipes").add(doc);
            history.push("/");
        } catch (error) {}
    };

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredients.trim();

        if (ing && !ingredients.includes(ing)) {
            setIngredients((prevIngredients) => [...prevIngredients, ing]);
        }
        setNewIngredients("");
        ingredientInput.current.focus();
    };

    return (
        <div className="create">
            <h2 className="page-title">Add a New Recipe</h2>

            <from onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>

                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={(e) => setNewIngredients(e.target.value)}
                            value={newIngredients}
                            ref={ingredientInput}
                        />
                        <button className="btn" onClick={handleAdd}>
                            add
                        </button>
                    </div>
                </label>
                <p>
                    Current ingredients:{" "}
                    {ingredients.map((i) => (
                        <em key={i}>{i}, </em>
                    ))}
                </p>
                <label>
                    <span>Recipe method</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time (minutes):</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                <button className="btn">submit</button>
            </from>
        </div>
    );
}
