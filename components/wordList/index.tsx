import ArrowIcon from "./arrowIcon"
import { useState } from 'react'
import ListPreview from "./listPreview"
import FullList from "./fullList"

export const capitalize = (word: string): string => {
  let capitalized = word
  let arr = capitalized.split('')
  let newWord = arr[0].toUpperCase()
  for(let i = 1; i < arr.length; i++) {
    newWord = newWord + arr[i].toLowerCase()
  }
  return newWord
}

export type WordListProps = {
  words?: string[]
  revealWords: boolean
  answers: string[]
  pangrams: string[]
  isLoading?: boolean
}

export default function WordList(props: WordListProps) {
  const { words, revealWords, answers, pangrams, isLoading } = props
  const [showList, setShowList] = useState(false)

  return (
    <div data-testid="word-list" className={showList 
      ? "md:w-2/5 bg-white absolute z-30 border rounded-lg p-3 justify-between items-center font-light w-full flex flex-col flex-wrap mt-10 " 
      : "w-full md:w-2/5 bg-white absolute z-30 border rounded-lg p-3 flex flex-row justify-between items-center font-light mt-10 "}>
      {isLoading 
      ? <div data-testid="loading-div" className=" animate-pulse h-4 w-full bg-zinc-200 rounded-md m-1"/>
      : <div className=" w-full flex flex-row">
        <ListPreview answerLength={answers.length} revealWords={revealWords} words={words} showList={showList}/>
        <ArrowIcon showList={() => setShowList(!showList)}/>
      </div>}
      {showList && <FullList answers={answers} pangrams={pangrams} revealWords={revealWords} words={words} />}
    </div>
  )
}