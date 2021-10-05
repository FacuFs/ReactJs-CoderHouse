import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemListContainer from "./componentes/ItemListContainer.js"
import ItemCount from "./componentes/ItemCount"
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {

  return (

    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Nuestros productos"/>
     
    </div>
  );
}

export default App;
