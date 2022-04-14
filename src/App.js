import './App.css';
import Board from './components/Board.js'
import Keyboard from './components/Keyboard.js'
import { boardDefault } from './Words';
import { createContext, useState } from 'react';
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt}}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
