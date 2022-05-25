import {FiRefreshCcw} from 'react-icons/fi'

export default function Buttons({ searchWord, shuffle, clearWord, revealedAnswers }) {
  return (
    <div className="buttons">
      <button onClick={() => clearWord()} className="single-btn" disabled={revealedAnswers}>Delete</button>
      <button className="shuffle-btn" data-testid='shuffle-btn' onClick={() => shuffle()} disabled={revealedAnswers}>
        <FiRefreshCcw />
      </button>
      <button onClick={() => searchWord()} className="single-btn" disabled={revealedAnswers}>Enter</button>
    </div>
  )
}