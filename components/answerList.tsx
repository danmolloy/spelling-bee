import ArrowIcon from "./wordList/arrowIcon"
import { useState } from 'react'
import { capitalize } from "./wordList"

export type AnswerListProps = {
  words: string[]
  answers: string[]
}

export default function AnswerList(props: AnswerListProps) {
  const {words, answers } = props
  const [showList, setShowList] = useState(false)

  return (
    <div className={showList ? "word-list expanded-word-list" : "word-list"} data-testid="answer-list">
      {showList
        ? <div className="w-full " data-testid="full-answer-list">
          <p className="slide-in-text pb-4 w-full">You found {words.length} out of {answers.length} words</p>
          <div className="w-full flex flex-col flex-wrap ">
          {[...answers].sort((a, b) => a.length - b.length).map(i => (
            <p key={`${i}-answer`} className={words.includes(i.toUpperCase()) ? "px-1 border-b border-b-gray-300 py-2 font-bold" :"expanded-list-word"}>{capitalize(i)}</p>
          ))}
          </div>
        </div>
        : <div className="w-full flex flex-col flex-wrap "> {[...answers].sort((a, b) => a.length - b.length).slice(0, 4).map(i => (
          <p key={`${i}-found-word`} className={words.includes(i.toUpperCase()) ? "px-1 line-through" :"px-1"}>{capitalize(i)}</p>
        ))}
          <span className="text-gray-400 ">...</span>
          </div>}
        <ArrowIcon showList={() => setShowList(!showList)}/>
    </div>
  )
}