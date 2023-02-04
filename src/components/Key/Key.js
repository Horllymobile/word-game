import React from 'react'
function Key({ buttonKey, handleClick, check, guessNum, isChecked }) {
  function handleKeypress(e) {
    handleClick(e)
  }
  return (
    <button
      className={`button-cell ${guessNum <= 6 ? check?.status : undefined}`}
      value={buttonKey}
      onClick={(e) => handleKeypress(e.target.value)}
      disabled={isChecked === true || guessNum === 6}
    >
      {buttonKey}
    </button>
  )
}

export default Key
