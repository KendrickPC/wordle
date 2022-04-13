// import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js'
import Keyboard from './components/Keyboard.js'
function App() {
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
        <Board />
        <Keyboard />
      </nav>
    </div>
  );
}

export default App;
