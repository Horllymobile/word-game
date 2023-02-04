import React, { useState } from 'react'
import { sample } from '../../utils'
import { WORDS } from '../../data'
// import Input from '../Input'
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import Banner from '../Banner/Banner'
import { checkGuess } from '../../game-helpers'
import Keyboard from '../Keyboard/Keyboard'
// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  let [guess, setGuess] = useState('')
  const [guessNum, setGuessLeft] = useState(0)
  let [check, setCheck] = useState(false)
  function handleCheck(guess) {
    const checks = checkGuess(guess, answer)
    return checks.every((item) => item.status === 'correct')
  }

  function checkGuessNum() {
    const nextGuessNum = guessNum + 1
    setGuessLeft(nextGuessNum)
  }
  function handleKeyboard(e) {
    for (let i = 0; i < range(NUM_OF_GUESSES_ALLOWED).length; i++) {
      if ((i === 0 && !guesses[i]) || guesses[i]?.length < 5) {
        handleGuess(e, i)
        if (guess.length === 5) {
          check = handleCheck(guess)
          setCheck(check)
          setGuess('')
          checkGuessNum()
        }
        continue
      } else if (
        (i === 1 && !guesses[i] && guesses[i - 1]?.length === 5) ||
        guesses[i]?.length < 5
      ) {
        handleGuess(e, i)
        if (guess.length === 5) {
          check = handleCheck(guess)
          setCheck(check)
          setGuess('')
          checkGuessNum()
        }
        continue
      } else if (
        (i === 2 && !guesses[i] && guesses[i - 1]?.length === 5) ||
        guesses[i]?.length < 5
      ) {
        handleGuess(e, i)
        if (guess.length === 5) {
          check = handleCheck(guess)
          setCheck(check)
          setGuess('')
          checkGuessNum()
        }
        continue
      } else if (
        (i === 3 && !guesses[i] && guesses[i - 1]?.length === 5) ||
        guesses[i]?.length < 5
      ) {
        handleGuess(e, i)
        if (guess.length === 5) {
          check = handleCheck(guess)
          setCheck(check)
          setGuess('')
          checkGuessNum()
        }
        continue
      } else if (
        (i === 4 && !guesses[i] && guesses[i - 1]?.length === 5) ||
        guesses[i]?.length < 5
      ) {
        handleGuess(e, i)
        if (guess.length === 5) {
          check = handleCheck(guess)
          setCheck(check)
          setGuess('')
          checkGuessNum()
        }
        continue
      } else if (
        (i === 5 && !guesses[i] && guesses[i - 1]?.length === 5) ||
        guesses[i]?.length < 5
      ) {
        handleGuess(e, i)
        if (guess.length === 5) {
          check = handleCheck(guess)
          setCheck(check)
          setGuess('')
          checkGuessNum()
        }
        continue
      } else if (
        (i === 6 && !guesses[i] && guesses[i - 1]?.length === 5) ||
        guesses[i]?.length < 5
      ) {
        handleGuess(e, i)
        if (guess.length === 5) {
          check = handleCheck(guess)
          setCheck(check)
          setGuess('')
          checkGuessNum()
        }
        continue
      }
    }
  }
  const handleGuess = (key, index) => {
    const nextGuesses = [...guesses]
    guess += key
    setGuess(guess)
    nextGuesses[index] = guess
    setGuesses(nextGuesses)
  }
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((item) => (
        <Guess key={item} answer={answer} guessItem={guesses[item]} />
      ))}
      {/* <Input guessNum={guessNum} handleSubmit={handleInput} /> */}
      <div style={{ marginTop: '20px' }}>
        <Keyboard
          answer={answer}
          guessNum={guessNum}
          isChecked={check}
          onKeyboardEvent={(e) => handleKeyboard(e)}
        />
      </div>
      <div>
        {check && <Banner status={'happy'} numGuess={guessNum} />}
        {guessNum === NUM_OF_GUESSES_ALLOWED && !check && (
          <Banner status={'sad'} answer={answer} />
        )}
      </div>
    </div>
  )
}

export default Game
