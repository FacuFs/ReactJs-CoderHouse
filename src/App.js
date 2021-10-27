import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componentes/NavBar.js";
import Cart from "./componentes/Cart";
import ItemListContainer from "./componentes/ItemListContainer.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { CartContextProvider } from "./componentes/context/CartContext";
import Form from "./componentes/Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './firebase/index'


function App() {
  return (
    <div className="App">
      <CartContextProvider>
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
            <Route exact path="/Cart">
              <Cart />
            </Route>
            <Route exact path="/Form">
              <Form />
            </Route>
          </Switch>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
