import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'
function Guesses({ guessItem, answer }) {
  const check = checkGuess(guessItem, answer)
  return (
    <div className="guess-results">
      <p className="guess">
        {check &&
          range(5).map((item) => (
            <span key={item} className={`cell ${check[item]?.status}`}>
              {guessItem[item]}
            </span>
          ))}
        {!check &&
          range(5).map((item) => <span key={item} className={'cell'}></span>)}
      </p>
    </div>
  )
}

export default Guesses
