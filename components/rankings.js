import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { answerSum } from '../pages/index'

export const rankingLevels = [
  {
    name: "Beginner",
    minScoreMultiplier: 0
  },
  {
    name: "Good Start",
    minScoreMultiplier: .125
  },
  {
    name: "Moving Up", 
    minScoreMultiplier: .25
  },
  {
    name: "Good",
    minScoreMultiplier:  0.375
  },
  {
    name: "Solid",
    minScoreMultiplier: 0.5
  },
  {
    name: "Nice",
    minScoreMultiplier: 0.625
  },
  {
    name: "Great",
    minScoreMultiplier: 0.74
  },
  {
    name: "Amazing",
    minScoreMultiplier: 0.865
  },
  {
    name: "Genius",
    minScoreMultiplier: 1
  },
]


export default function Rankings({ data, showRankingsToggle }) {
  const [answersSum, setAnswersSum] = useState(null)

  useEffect(() => {
    if (!data) {
      return
    }
    setAnswersSum(answerSum(data?.gameData.yesterday.answers, data?.gameData.yesterday.pangrams));
  }, [data])

  return (
      <div className="slide-up rankings" onBlur={() => showRankingsToggle()}>
      <div className='flex flex-row justify-between'>
        <h2 className="font-bold text-2xl">Rankings</h2>
        <button className='menu-icon' onClick={() => showRankingsToggle()}>
          <AiOutlineClose />
        </button>
      </div>
      <div className='p-4 font-semithin text-lg'>   
        <p >Below are the minimum scores for the rankings of the current puzzle.</p>
        <p> Please refer to <i>How to Play</i> for scoring system.</p>
      </div>
      <ul className="pl-4 font-semithin">
        {rankingLevels.map(i => (
          <li key={i.name}>{i.name} (<span className='font-medium'>{Math.floor(answersSum *i.minScoreMultiplier)}</span>)</li>
        ))}
      </ul>
    </div>
    
  )
}