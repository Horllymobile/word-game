import React from 'react'
function Banner({ status, numGuess, answer }) {
  return (
    <div className={`${status} banner`} style={{ marginBottom: '200px' }}>
      {status === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuess} guesses</strong>
        </p>
      )}
      {status === 'sad' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  )
}

export default Banner
