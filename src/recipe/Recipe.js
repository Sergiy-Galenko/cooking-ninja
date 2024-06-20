import { useParams } from "react-router-dom";
import "./Recipe.css";
import { useTheme } from "../hooks/useTheme";
import { useEffect } from "react";
import { projectFirebasestore } from "../firebase/confige";

export default function Recipe() {
    const { id } = useParams();
    const { mode } = useTheme();

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true);
        projectFirebasestore
            .collection("recipes")
            .doc(id)
            .get()
            .then(() => {
                if (doc.exists) {
                    setIsPending(false);
                    setRecipe(doc.data());
                } else {
                    setIsPending(false);
                    setError("Could not find that recipe");
                }
            });
    }, []);

    return (
        <div className="recipes">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipes && (
                <>
                    <h2 className="page-title"></h2>
                    <p>Takes {recipes.cookingTime} to cook.</p>
                    <ul>
                        {recipes.ingridients.map((ing) => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className="method">{recipes.method}</p>
                </>
            )}
        </div>
    );
}
