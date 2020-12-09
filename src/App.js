import './App.css';
import EasternConference from './conferences/EasternConference';
import WesternConference from './conferences/WesternConference';

function App() {
  return (
    <div className="App">
        <h1>NBA Teams</h1>
        <EasternConference />
        <WesternConference />
    </div>
  );
}

export default App;
