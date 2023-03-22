import { useState } from "react";
import Hexagon from "./hexagon";

interface LettersProps {
  setLetter: (arg: string) => void
  centerLetter: string|undefined
  outerLetters: string[]
  letterIndex: number[]
}

export default function Letters(props: LettersProps) {
  const { setLetter, centerLetter = undefined, outerLetters = [], letterIndex } = props;

  return (
    <div data-testid="letters-div" className="w-full fill-gray-300 justify-center flex flex-row md:p-6">
      <div className="left flex flex-col h-full ">
        <Hexagon center={false} letter={outerLetters[letterIndex[0]]} setLetter={() => setLetter(outerLetters[letterIndex[0]])}/>
        <Hexagon center={false} letter={outerLetters[letterIndex[1]]} setLetter={() => setLetter(outerLetters[letterIndex[1]])}/>
      </div>
      <div className=" flex flex-col h-full -mt-10 md:-mt-14">
        <Hexagon center={false} letter={outerLetters[letterIndex[2]]} setLetter={() => setLetter(outerLetters[letterIndex[2]])}/>
        <Hexagon center={true} letter={centerLetter} setLetter={() => setLetter(centerLetter)}/>
        <Hexagon center={false} letter={outerLetters[letterIndex[4]]} setLetter={() => setLetter(outerLetters[letterIndex[4]])}/>
      </div>
      <div className="flex flex-col">
        <Hexagon center={false} letter={outerLetters[letterIndex[5]]} setLetter={() => setLetter(outerLetters[letterIndex[5]])}/>
        <Hexagon center={false} letter={outerLetters[letterIndex[3]]} setLetter={() => setLetter(outerLetters[letterIndex[3]])}/>
      </div>
      
      
    </div>
  );
}

