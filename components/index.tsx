import { useEffect, useState } from "react";
import Header from "./header";
import WordList from "./wordList";
import UserRanking from "./userRanking";
import InputIndex from "./input";
import Menu from "./menu/menu";
import Hints from "./menu/hints";
import Rankings from "./menu/rankings";
import HowTo from "./menu/howTo";
import Realistic from "./realistic";
import Encouragement from "./encouragement";
import { GameData, getPoints, handleSubmit } from "../lib/functions";

export type GameIndexProps = {
  data?: GameData
}

export default function GameIndex(props: GameIndexProps) {
  const { data } = props;
  const [showMenuItem, setShowMenuItem] = useState<string|null>(null)
  const [foundWords, setFoundWords] = useState<string[]>([])
  const [inputWord, setInputWord] = useState<string>("")
  const [revealWords, setRevealWords] = useState<boolean>(false)
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
      if (localStorage.getItem('revealed') === "true" 
      && data.answers.includes(localStorage.getItem('foundWords').split(',')[0].toLowerCase())) {
        setRevealWords(true);
        setFoundWords(localStorage.getItem('foundWords').split(','));
      } else if (data.answers.includes(localStorage.getItem('foundWords').split(',')[0].toLowerCase())) {
        const foundedWords = localStorage.getItem('foundWords').split(',')
        setFoundWords([...foundedWords])
      } else {
        localStorage.clear()
      }
    }
  }, [data])

  const handleEnter = (word: string) => {
    const submitObj = handleSubmit(word, data, foundWords)
    if (submitObj.addedPoints === 0) {
      setMessage(submitObj.message)
      setTimeout(() => {
        setInputWord(""); 
        setMessage(null)
      }, 750)
    } else {
      localStorage.setItem('foundWords', String([word, ...foundWords]))
      setFoundWords([word, ...foundWords])
      setMessage(submitObj.message)
      setAddedPoints(getPoints([word]))
      submitObj.message === "Pangram!" && setFoundPangram(true)
      setTimeout(() => {
        setAddedPoints(null); 
        setMessage(null);
        setInputWord("");
      }, 1000)
      setTimeout(() => {
        setFoundPangram(false)
      }, 4000)
    }
  }

  return (
    <div data-testid="game-index" className={"flex flex-col items-center"}>
      <Header 
        date={data.displayDate} 
        editor={data.editor} 
        setShowMenu={() => setShowMenuItem("navbar")} />
        {showMenuItem === "navbar" && <Menu setShowMenuItem={(arg) => setShowMenuItem(arg)}/>}
        {showMenuItem === "howTo" && <HowTo setShowMenuItem={(arg) => setShowMenuItem(arg)} />}
        {showMenuItem === "hints" && <Hints validLetters={data.validLetters} centerLetter={data.centerLetter} revealAnswers={revealWords} setRevealAnswers={() => setRevealWords(true)} setShowMenuItem={(arg) => setShowMenuItem(arg)} pangrams={data.pangrams} answers={data.answers} />}
        {showMenuItem === "rankings" && <Rankings currentScore={getPoints(foundWords)} geniusScore={getPoints(data.answers)} setShowMenuItem={(arg) => setShowMenuItem(arg)} />}
        {data.answers.length === foundWords.length 
        && <Realistic reaction={"Bravo!"} />}
        {foundPangram === true && <Realistic reaction={message} />}
        {addedPoints !== null
        && <Encouragement text={message} points={addedPoints}/>}
      <div className="flex flex-col md:flex-row-reverse w-full">
        <div className="flex flex-col md:w-1/2 w-full md:px-2 items-center">
          <UserRanking answers={data.answers} userPoints={getPoints(foundWords)}/>
          <WordList answers={data.answers} pangrams={data.pangrams} revealWords={revealWords} words={foundWords}/>
        </div>
        <InputIndex 
          message={!addedPoints && message}
          inputWord={inputWord}
          setInputWord={(str) => setInputWord(str)}
          centerLetter={data.centerLetter.toUpperCase()} 
          revealedAnswers={revealWords} 
          enterWord={(word) => handleEnter(word)} 
          outerLetters={data.outerLetters.map(i => i.toUpperCase())}/>
      </div>
    </div>
  );
}