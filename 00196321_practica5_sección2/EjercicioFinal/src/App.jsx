import CardScientist from './components/CardScientist';
import { scientists } from './data/scientists';
import './App.css';

function App() {
  return (
    <div>
      <header className="app-header">
        <h1 className="app-title">Científicos Notables</h1>
        <p className="app-subtitle">
          Las mentes mas bizarras de la humanidad
        </p>
      </header>

      <div className="scientists-grid">
        {scientists.map((scientist, index) => (
          <CardScientist
            key={index}
            name={scientist.name}
            image={scientist.image}
            profession={scientist.profession}
            awards={scientist.awards}
            discoveries={scientist.discoveries}
          />
        ))}
      </div>
    </div>
  );
}

export default App;