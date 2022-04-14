import React from 'react'
import Key from '../components/Key'

function Keyboard() {
  const topRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
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
