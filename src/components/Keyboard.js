import React, {useCallback, useEffect, useContext} from 'react'
import Key from '../components/Key'
import {AppContext} from '../App';

function Keyboard() {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
  const topRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback( (event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      topRowKeys.forEach( (key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
      middleRowKeys.forEach( (key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
      bottomRowKeys.forEach( (key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
    }
  });


  useEffect( () => {
    document.addEventListener("keydown", handleKeyboard)

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1"> {topRowKeys.map( (key) => {
        return < Key keyValue ={key}/>
      })}
      </div>
      
      <div className="line2"> {middleRowKeys.map( (key) => {
        return < Key keyValue ={key}/>
      })}

      </div>
      <div className="line3"> 
        < Key keyValue="ENTER" bigKey/>

        {bottomRowKeys.map( (key) => {
          return < Key keyValue ={key}/>
        })}

        < Key keyValue="DELETE" bigKey/>
      </div>
    </div>
  )
}

export default Keyboard
