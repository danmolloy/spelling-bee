import ArrowIcon from "./arrowIcon"
import { useState } from 'react'

export default function AnswerList({words, answers }) {
  const [showList, setShowList] = useState(false)

  const capitalize = (word) => {
    let capitalized = word
    let arr = capitalized.split('')
    for(let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase()
    }
    return arr
  }


  return (
    <div className={showList ? "word-list expanded-word-list" : "word-list"}>
      {
        showList
        ?
        <div className="w-full ">
          <p className="slide-in-text pb-4 w-full">You found {words.filter(i => i.length > 0).length} out of {answers.length} words</p>
          <div className="expanded-list-words">
          {[...answers].sort((a, b) => a.length - b.length).map(i => (
            <p key={i} className={words.includes(i.toUpperCase()) ? "expanded-list-word font-bold" :"expanded-list-word"}>{capitalize(i)}</p>
          ))}
          </div>
        </div>
        :<div className="word-list-words">
        {words.filter(i => i.length > 1).length < 1 
        && <p className="text-gray-400">The answers...</p>}
        { words.filter(i => i.length > 1).length > 4
        ? <div className="word-list-words"> {[...answers].sort((a, b) => a.length - b.length).slice(0, 4).map(i => (
          <p key={i} className={words.includes(i.toUpperCase()) ? "list-word font-bold" :"list-word"}>{capitalize(i)}</p>
        ))}
          <span className="text-gray-400 ">...</span>
          </div>
          
        : words.filter(i => i.length > 1).map(i => (
          <p key={i} className="list-word">{capitalize(i)}</p>
        ))}
      </div>
      }
      
      <ArrowIcon showList={() => setShowList(!showList)}/>
    </div>
  )
}