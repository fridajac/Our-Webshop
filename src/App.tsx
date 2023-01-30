import './App.css';
import Catalog from './components/catalog/Catalog';
import InformationBox from './components/InformationBox/InformationBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our new webshop</h1>
      </header>
      <div className="Main-content">
        <InformationBox />
        <Catalog />
      </div>
    </div>
  );
}

export default App;
