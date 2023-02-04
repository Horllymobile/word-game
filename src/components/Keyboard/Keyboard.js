import React, { useState } from 'react'
import Key from '../Key'
import { checkGuess } from '../../game-helpers'
function Keyboard({ onKeyboardEvent, answer, guessNum, isChecked }) {
  let [guess, setGuess] = useState('')
  let [checks, setCheck] = useState([])
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const row3 = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']
  function handleButtonClick(key) {
    if (key !== 'ENTER' && key !== 'DELETE') {
      guess += key
      setGuess(guess)
      if (guess.length <= 5) {
        setCheck([...checks, ...checkGuess(guess, answer)])
        if (guess.length === 5) {
          setGuess('')
        }
      }
      onKeyboardEvent(key)
    }
  }
  return (
    <div>
      <div className="row" style={{ marginTop: '10px' }}>
        {row1.map((col) => (
          <Key
            check={checks?.find((check) => check.letter === col)}
            isChecked={isChecked}
            key={col}
            buttonKey={col}
            handleClick={(e) => handleButtonClick(e)}
            guessNum={guessNum}
          />
        ))}
      </div>
      <div className="row" style={{ marginTop: '10px' }}>
        {row2.map((col) => (
          <Key
            check={checks.find((check) => check.letter === col)}
            key={col}
            buttonKey={col}
            handleClick={(e) => handleButtonClick(e)}
            guessNum={guessNum}
          />
        ))}
      </div>
      <div className="row" style={{ marginTop: '10px' }}>
        {row3.map((col) => (
          <Key
            check={checks.find((check) => check.letter === col)}
            key={col}
            buttonKey={col}
            handleClick={(e) => handleButtonClick(e)}
            guessNum={guessNum}
          />
        ))}
      </div>
    </div>
  )
}

export default Keyboard
