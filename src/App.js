import './App.css';
import players from './players'; // Import players here
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <PlayersList players={players} />
    </div>
  );
}

export default App;
