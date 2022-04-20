import {FiRefreshCcw} from 'react-icons/fi'

export default function Buttons({ searchWord, shuffle, clearWord }) {
  return (
    <div className="buttons">
      <button onClick={() => clearWord()} className="single-btn">Delete</button>
      <button className="shuffle-btn" data-testid='shuffle-btn' onClick={() => shuffle()}>
        <FiRefreshCcw />
      </button>
      <button onClick={() => searchWord()} className="single-btn">Enter</button>
    </div>
  )
}