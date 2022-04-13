import './App.css';
import Board from './components/Board.js'
import Keyboard from './components/Keyboard.js'
import { boardDefault } from './Words';
import { createContext, useState } from 'react';
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard}}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
