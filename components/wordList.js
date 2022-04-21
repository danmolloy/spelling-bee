import ArrowIcon from "./arrowIcon"
import { useState } from 'react'

export default function WordList({words}) {
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
    <div className="word-list">
      {
        showList
        ?
        <div className="w-full">
          <p className="slide-in-text pb-4 w-full">You have found {words.filter(i => i.length > 0).length} words</p>
          <div className="expanded-list-words">
          {words.length < 1 || words.length === 1 && words[0] == "" && <p className="text-gray-400">Your words...</p>}
          {words.sort((a, b) => a.length - b.length).map(i => (
            i.length > 0 && <p key={i} className="expanded-list-word">{capitalize(i)}</p>
          ))}
          </div>
        </div>
        :<div className="word-list-words">
        {words.length < 1 || words.length === 1 && words[0] == "" && <p className="text-gray-400">Your words...</p>}
        {words.map(i => (
          <p key={i} className="list-word">{capitalize(i)}</p>
        ))}
      </div>
      }
      
      <ArrowIcon showList={() => setShowList(!showList)}/>
    </div>
  )
}