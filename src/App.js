import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componentes/NavBar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
import ItemCount from "./componentes/ItemCount";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/ItemListContainer">
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
