import './App.css';
import Catalog from './components/catalog/Catalog';
import InformationBox from './components/InformationBox/InformationBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our new webshop</h1>
      </header>
      <main>
        <InformationBox />
        <Catalog />
      </main>
    </div>
  );
}

export default App;
