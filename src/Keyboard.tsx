import React from 'react'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetters: (letter: string) => void,
    disabled?: boolean
};

const Keyboard = ({ activeLetters,inactiveLetters,addGuessedLetters,disabled } : KeyboardProps) => {
    return (
        <div className='flex flex-wrap justify-center gap-2 w-full m-auto'>
            {
                KEYS.map(key => {
                    const isActive = activeLetters.includes(key)
                    const isInactive = inactiveLetters.includes(key)
                    return (
                        <button disabled={isActive || isInactive || disabled} onClick={() => addGuessedLetters(key)} className={`w-20 uppercase border-[3px] border-solid border-black text-4xl p-2 font-bold cursor-pointer
                                                                                 enabled:hover:bg-sky-400 ${isActive ? 'bg-sky-400' : 'bg-transparent'} ${isInactive ? 'opacity-30' : 'opacity-100'}`} key={key}>
                            {key}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Keyboard