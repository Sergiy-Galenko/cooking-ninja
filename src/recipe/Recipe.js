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

        const unsub = projectFirestore.collection("recipes").onSnapshot(
            (docSnapshot) => {
              if (!docSnapshot.empty) {
                setIsPending(false);
                setRecipe(docSnapshot.docs.map((doc) => doc.data()));
              } else {
                setIsPending(false);
              }
            },
          );
          
          return () => unsub();
        }, [id])
    const handleClick = () => {
        projectFirebasestore.collection("recipes").doc(id).update({
            title: "Something completely different",
        });
    };

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
                    <button onClick={handleClick}>Update me</button>
                </>
            )}
        </div>
    );
}
