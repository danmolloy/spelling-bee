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
  //revealWords: boolean
  answers: string[]
  pangrams: string[]
  isLoading?: boolean
}

export default function WordList(props: WordListProps) {
  const { words, /* revealWords, */ answers, pangrams, isLoading } = props
  const [showList, setShowList] = useState(false)

  return (
    <div data-testid="word-list" 
      className={showList 
      ? "w-[96vw] md:w-2/5 h-3/4 overflow-y-scroll bg-white absolute z-30 border rounded-lg p-2 justify-start items-center font-light flex flex-col mt-10 transition-all duration-400" 
      : "w-[96vw] md:w-2/5 h-12 bg-white absolute z-30 border rounded-lg p-2 flex flex-col justify-start overflow-hidden items-center font-light mt-10 transition-all duration-400"}>
      <div className=" w-full flex flex-row items-center ">
        <ListPreview answerLength={answers.length} words={words} showList={showList}/>
        <ArrowIcon showList={() => setShowList(!showList)}/>
      </div>
      {showList && <FullList answers={answers} pangrams={pangrams} /* revealWords={revealWords} */ words={words} />}
    </div>
  )
}