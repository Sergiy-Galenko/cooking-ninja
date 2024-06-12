import { Router } from "express";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrawserRouter>
                <Navbar />
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
