import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componentes/NavBar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/categoria/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
