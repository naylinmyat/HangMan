import React from 'react'

type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean
}

const HangmanWord = ({ guessedLetters,wordToGuess,reveal } : HangmanWordProps) => {
  return (
    <div className='flex gap-[0.25em] text-8xl font-bold uppercase'>
        {
            wordToGuess.split("").map((letter,index) => (
                <span className='border-b-[0.1em] border-solid border-black' key={index}>
                    <span className={`${guessedLetters.includes(letter) || reveal ? 'visible' : 'invisible'} ${!guessedLetters.includes(letter) && reveal ? 'text-red-500' : 'text-black'}`}>
                        {letter}
                    </span>
                </span>
            ))
        }
    </div>
  )
}

export default HangmanWord