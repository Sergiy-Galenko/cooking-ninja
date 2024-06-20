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
        projectFirebasestore
            .collection("resipes")
            .get()
            .then(() => {
                if (snapshot.empty) {
                    setError("No recipes to load");
                    setIsPending(false);
                } else {
                    let result = [];
                    snapshot.docs.forEach((doc) =>
                        result.push({ id: doc.id, ...doc.data() })
                    );
                    setData(result);
                    setIsPending(false);
                }
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
            });
    }, []);

    return (
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}