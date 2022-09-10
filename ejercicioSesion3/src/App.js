import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';
import { Contacto } from './models/contacto.class';

function App() {
  const contactoDefault = new Contacto('Luis', 'Coronel', 'lufecoro@outlook.com', false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={ contactoDefault }/>
      </header>
    </div>
  );
}

export default App;
