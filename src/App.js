import './App.css';
import CardIntegrantes from './Components/CardIntegrantes/CardIntegrantes';
import ComoUsar from './Components/ComoUsar/ComoUsar';
import Footer from './Components/Footer/Footer';
import Funcionalidades from './Components/Funcionalidades/Funcionalidades';
import Home from './Components/Home/Home';
import Objetivo from './Components/Objetivo/Objetivo';


function App() {
  return (
    <div className="App">
      <Home />
      <Objetivo />
      <Funcionalidades />
      <ComoUsar />
      <CardIntegrantes />
      <Footer />
    </div>
  );
}

export default App;
