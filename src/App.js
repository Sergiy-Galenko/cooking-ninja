import { Router } from "express";
import "./App.css";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";

function App() {
    const { mode } = useTheme();
    return (
        <div className={`App ${mode}`}>
            <BrawserRouter>
                <Navbar />
                <ThemeSelector />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Create />
                    </Route>
                    <Route exact path="/">
                        <Search />
                    </Route>
                    <Route exact path="/">
                        <Recipe />
                    </Route>
                </Switch>
            </BrawserRouter>
        </div>
    );
}

export default App;
