import logo from './logo.svg';
import './App.css';
import EasternConference from './conferences/EasternConference';
import WesternConference from './conferences/WesternConference';

function App() {
  return (
    <div className="App">
        <EasternConference />
        <WesternConference />
    </div>
  );
}

export default App;
