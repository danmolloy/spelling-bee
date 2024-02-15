import { useEffect } from "react";

export type InputProps = {
  userWord: string
  setUserWord: (arg: string) => void
  backSpace: () => void
  revealedAnswers: boolean
  searchWord: (word: string) => void
  shuffle: () => void
  outerLetters: string[]
  centerLetter: string
}

export default function TextInput(props: InputProps) {
  const { 
    userWord, 
    setUserWord, 
    backSpace, 
    revealedAnswers, 
    searchWord, 
    shuffle, 
    centerLetter, 
    outerLetters 
  } = props;

  const logKey = (e): void => {
    if (e.keyCode === 8) {
      backSpace()
    }
    else if (e.keyCode > 64 && e.keyCode < 91) {
      setUserWord(userWord.concat(e.key.toUpperCase()))
    } else if (e.keyCode === 13) {
      !revealedAnswers && searchWord(userWord)
    } else if (e.keyCode === 32) {
      shuffle()
    }
  }

 useEffect(() => {
    window.addEventListener("keydown", logKey)
    return () => {
      window.removeEventListener("keydown",logKey)
    }
  }, [logKey])

  return (
    <div data-testid="text-input">
      <h2 className='font-bold text-2xl text-yellow-500 h-12 flex items-center justify-center  self-center'>
        {userWord.split('').map((i, index) => 
          <span 
            key={index} // Dangerous!
            className={i === centerLetter.toUpperCase() 
              ? "text-yellow-500" 
              : outerLetters.includes(i.toUpperCase()) 
              ? "text-black" 
              : "text-gray-300"}>
            {i}</span>
            )}
        <span className='flex text-yellow-300 text-3xl font-medium z-20 w-3 items-center justify-center mb-1 cursor'>|</span>
      </h2>
    </div>
  );
}