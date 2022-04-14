import './App.css';
import Board from './components/Board.js'
import Keyboard from './components/Keyboard.js'
import { boardDefault } from './Words';
import { createContext, useState } from 'react';
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1});
  }
  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition-1] = "";
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1});
  }

  const onEnter = () => {
    console.log(currentAttempt);
    if (currentAttempt.letterPosition !== 5) return;
    setCurrentAttempt( {attempt: currentAttempt.attempt + 1, letterPosition: 0} );
  }

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter}}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
