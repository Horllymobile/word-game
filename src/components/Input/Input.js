import React, { useState } from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
function Input({ handleSubmit, guessNum }) {
  const [guess, setGuess] = useState('')
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault()
        if (guess.length === 5) {
          handleSubmit(guess)
          setGuess('')
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={guessNum === NUM_OF_GUESSES_ALLOWED}
        onChange={(event) => setGuess(event.target.value.toLocaleUpperCase())}
        minLength={5}
        maxLength={5}
      />
    </form>
  )
}

export default Input
