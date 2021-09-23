import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemListContainer from "./componentes/ItemListContainer.js"

function App() {
  return (

    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Nuestros productos"/>
    </div>
  );
}

export default App;
