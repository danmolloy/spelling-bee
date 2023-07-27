import { useEffect } from "react";

interface InputProps {
  userWord: string
  setUserWord: (arg: string) => void
  backSpace: () => void
  revealedAnswers: boolean
  searchWord: (word: string) => void
  shuffle: () => void
  outerLetters: string[]
  centerLetter: string
  
}

export default function Input(props: InputProps) {
  const { 
    userWord, 
    setUserWord, 
    backSpace, 
    revealedAnswers, 
    searchWord, 
    shuffle, 
    centerLetter, 
    outerLetters } = props;

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
    <div data-testid="input-div">
      <h2 className='input self-center '>{userWord.split('').map(i => <span key={i} className={i === centerLetter.toUpperCase() ? "text-yellow-500" : outerLetters.includes(i.toUpperCase()) ? "text-black" : "text-gray-300"}>{i}</span>)}<span className='cursor'>|</span></h2>

      {/* <input
        data-testid="input-box"
        className="font-bold text-2xl text-yellow-500 h-12 flex items-center justify-center" 
        value={userWord} 
        onChange={(e) => setUserWord(e.target.value)} /> */}
    </div>
  );
}