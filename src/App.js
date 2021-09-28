import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemListContainer from "./componentes/ItemListContainer.js"
import ItemCount from "./componentes/ItemCount"

function App() {
  const stock=10;
  return (

    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Nuestros productos"/>
      <ItemCount stock={stock} inicial="1"/>
    </div>
  );
}

export default App;
