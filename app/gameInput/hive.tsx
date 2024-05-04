import { useState } from "react";
import Hexagon from "./hexagon";

export type LettersProps = {
  setLetter: (arg: string) => void
  centerLetter: string|undefined
  outerLetters: string[]
  letterIndex: number[]
  shuffling: boolean
}

export default function Letters(props: LettersProps) {
  const { shuffling, setLetter, centerLetter = undefined, outerLetters = [], letterIndex } = props;
  return (
    <div data-testid="letters-div" className="w-full fill-gray-300 justify-center flex flex-row md:p-6">
      <div className="left flex flex-col h-full ">
        <Hexagon shuffling={shuffling} center={false} letter={outerLetters[letterIndex[0]]} setLetter={() => setLetter(outerLetters[letterIndex[0]])}/>
        <Hexagon shuffling={shuffling} center={false} letter={outerLetters[letterIndex[1]]} setLetter={() => setLetter(outerLetters[letterIndex[1]])}/>
      </div>
      <div className=" flex flex-col h-full -mt-10 md:-mt-14">
        <Hexagon shuffling={shuffling} center={false} letter={outerLetters[letterIndex[2]]} setLetter={() => setLetter(outerLetters[letterIndex[2]])}/>
        <Hexagon shuffling={shuffling} center={true} letter={centerLetter} setLetter={() => {centerLetter && setLetter(centerLetter)}}/>
        <Hexagon shuffling={shuffling} center={false} letter={outerLetters[letterIndex[4]]} setLetter={() => setLetter(outerLetters[letterIndex[4]])}/>
      </div>
      <div className="flex flex-col">
        <Hexagon shuffling={shuffling} center={false} letter={outerLetters[letterIndex[5]]} setLetter={() => setLetter(outerLetters[letterIndex[5]])}/>
        <Hexagon shuffling={shuffling} center={false} letter={outerLetters[letterIndex[3]]} setLetter={() => setLetter(outerLetters[letterIndex[3]])}/>
      </div>
    </div>
  );
}

