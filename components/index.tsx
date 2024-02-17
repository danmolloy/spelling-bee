import { useEffect, useState } from "react";
import Header from "./layout/header";
import WordList from "./wordList";
import UserRanking from "./rankings/userRanking";
import InputIndex from "./gameInput";
import Menu from "./menu/menu";
import Hints from "./hints";
import Rankings from "./rankings";
import HowTo from "./howTo";
import Realistic from "./effects/realistic";
import Encouragement from "./effects/encouragement";
import { GameData, getPoints, handleSubmit } from "../lib/functions";
import Footer from "./layout/footer";

export type GameIndexProps = {
  data: GameData
}

export default function GameIndex(props: GameIndexProps) {
  const { data } = props;
  const [showMenuItem, setShowMenuItem] = useState<string|null>(null)
  const [foundWords, setFoundWords] = useState<string[]>([])
  const [inputWord, setInputWord] = useState<string>("")
  //const [revealWords, setRevealWords] = useState<boolean>(false)
  const [message, setMessage] = useState<string|null>(null)
  const [addedPoints, setAddedPoints] = useState<number|null>(null)
  const [foundPangram, setFoundPangram] = useState<boolean>(false)
  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.answers.length === foundWords.length) {
      setInputWord("Epic!")
    }
    if (localStorage.getItem("foundWords") !== null) {
      if (data.answers.includes(localStorage.getItem('foundWords')!.split(',')[0].toLowerCase())) {
        const foundedWords = localStorage.getItem('foundWords')!.split(',')
        setFoundWords([...foundedWords])
      } else {
        localStorage.clear()
      }
    }
  }, [data])

  const handleEnter = (word: string) => {
    if (word.length === 0 || data === undefined) {
      return;
    }
    const submitObj = handleSubmit(word, data, foundWords)
    if (submitObj.addedPoints === 0) {
      setMessage(submitObj.message)
      setTimeout(() => {
        setInputWord("");
      }, 500)
      setTimeout(() => {
        setMessage(null)
      }, 750)
    } else {
      localStorage.setItem('foundWords', String([word, ...foundWords]))
      setFoundWords([word, ...foundWords])
      setMessage(submitObj.message)
      setAddedPoints(getPoints([word]))
      submitObj.message === "Pangram!" && setFoundPangram(true)
      setTimeout(() => {
        setInputWord("");
      }, 500)
      setTimeout(() => {
        setAddedPoints(null); 
        setMessage(null);
      }, 1000)
      setTimeout(() => {
        setFoundPangram(false)
      }, 4000)
    }
  }

  return (
    <div data-testid="game-index" className={"flex flex-col items-center justify-start min-h-screen"}>
      <Header 
        date={data.displayDate} 
        editor={data.editor} 
        setShowMenu={() => setShowMenuItem("navbar")} />
        {showMenuItem === "navbar" && <Menu setShowMenuItem={(arg) => setShowMenuItem(arg)}/>}
        {showMenuItem === "howTo" && <HowTo setShowMenuItem={(arg) => setShowMenuItem(arg)} />}
        {showMenuItem === "hints" && <Hints foundWords={foundWords} validLetters={data.validLetters} centerLetter={data.centerLetter} /* revealAnswers={revealWords} *//*  setRevealAnswers={() => setRevealWords(true)} */ setShowMenuItem={(arg) => setShowMenuItem(arg)} pangrams={data.pangrams} answers={data.answers} />}
        {showMenuItem === "rankings" && <Rankings currentScore={getPoints(foundWords)} geniusScore={getPoints(data.answers)} setShowMenuItem={(arg) => setShowMenuItem(arg)} />}
        {data.answers.length === foundWords.length 
        && <Realistic reaction={"Bravo!"} />}
        {foundPangram === true && <Realistic reaction={message} />}
        {addedPoints !== null && message !== null
        && <Encouragement text={message} points={addedPoints}/>}
      <div className="flex flex-col md:flex-row-reverse w-full pb-12">
        <div className="flex flex-col md:w-1/2 w-full md:px-2 items-center">
          <UserRanking answers={data.answers} userPoints={getPoints(foundWords)}/>
          <WordList answers={data.answers} pangrams={data.pangrams} /* revealWords={revealWords} */ words={foundWords}/>
        </div>
        <InputIndex 
          message={!addedPoints ? message : undefined}
          inputWord={inputWord}
          setInputWord={(str) => setInputWord(str)}
          centerLetter={data.centerLetter.toUpperCase()} 
          //revealedAnswers={revealWords} 
          enterWord={(word) => handleEnter(word)} 
          outerLetters={data.outerLetters.map(i => i.toUpperCase())}/>
      </div>
      {/* <Footer /> */}
    </div>
  );
}