import Hexagon from "./hexagon";
import { useState, useEffect } from 'react'


export default function Letters({setLetter, shuffle, shuffledLetters, data}) {
  

  return (
    <div className="w-full letters justify-center flex flex-row md:p-6">
      
      <div className="left flex flex-col h-full ">
        <Hexagon letter={shuffledLetters && shuffledLetters[0]} setLetter={() => setLetter(shuffledLetters[0])}/>
        <Hexagon letter={shuffledLetters && shuffledLetters[1]} setLetter={() => setLetter(shuffledLetters[1])}/>
      </div>
      <div className=" flex flex-col h-full -mt-10 md:-mt-14">
        <Hexagon letter={shuffledLetters && shuffledLetters[2]} setLetter={() => setLetter(shuffledLetters[2])}/>
        <Hexagon data-testid="center-letter" center letter={data && data.centerLetter.toUpperCase()} setLetter={() => setLetter(data.centerLetter.toUpperCase())}/>
        <Hexagon letter={shuffledLetters && shuffledLetters[4]} setLetter={() => setLetter(shuffledLetters[4])}/>
      </div>
      <div className="flex flex-col">
        <Hexagon letter={shuffledLetters && shuffledLetters[5]} setLetter={() => setLetter(shuffledLetters[5])}/>
        <Hexagon letter={shuffledLetters && shuffledLetters[3]} setLetter={() => setLetter(shuffledLetters[3])}/>
      </div>
    </div>
  )
}

