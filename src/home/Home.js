import "./Home.css";
import RecipeList from "../components/RecipeList";
import { projectFirebasestore } from "../firebase/confige";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true);

        const unsub = projectFirebasestore.collection("recipes").onSnapshot(
            (snapshot) => {
                if (snapshot.empty) {
                    setError("No recipes to load");
                    setIsPending(false);
                } else {
                    let results = [];
                    snapshot.docs.forEach((doc) => {
                        result.push({ id: doc.id, ...doc.data() });
                    });
                    setData(results);
                    setIsPending(false);
                }
            },
            (err) => {
                setError(err.message);
                setIsPending(false);
            }
        );
        return () => unsub();
    }, []);

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}
