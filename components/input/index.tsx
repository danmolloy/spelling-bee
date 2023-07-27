import { useEffect, useState } from "react";
import Buttons from "./buttons";
import Input from "./input";
import Letters from "./letters";

interface InputIndexProps {
  centerLetter: string
  revealedAnswers: boolean
  outerLetters: string[]
  enterWord: (word: string) => void
  inputWord: string
  setInputWord: (str: string) => void
  message: string|null
  isLoading?: boolean
}

export default function InputIndex(props: InputIndexProps) {
  const { message, revealedAnswers, centerLetter, outerLetters, enterWord, setInputWord, inputWord, isLoading } = props;
  const [zeroToFive, setZeroToFive] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const shuffle = (): void => {
    setZeroToFive([...zeroToFive].sort((() => Math.random() - 0.5)))
  }
  
  const backSpace = (): void => {
    setInputWord(inputWord.slice(0, -1))
  }
  
  return (
    <div className="mt-16 flex flex-col items-center md:w-1/2">
      {message && <div className="absolute -mt-10 z-30 bg-black text-white px-3 py-1 rounded font-light text-sm">
        <h3>{message}</h3>
      </div>}
      <Input outerLetters={outerLetters} centerLetter={centerLetter} revealedAnswers={revealedAnswers} shuffle={() => shuffle()} backSpace={() => backSpace()} searchWord={(word) => enterWord(word)} userWord={inputWord} setUserWord={(str) => setInputWord(str)} />
      <Letters letterIndex={zeroToFive} centerLetter={centerLetter} setLetter={(letter) => setInputWord(inputWord + letter)} outerLetters={outerLetters}/>
      {!isLoading && <Buttons revealedAnswers={revealedAnswers} shuffle={() => shuffle()} clearWord={() => backSpace()} searchWord={() => enterWord(inputWord)}/>}
    </div>
  );
}