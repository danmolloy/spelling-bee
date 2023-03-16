import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { getPoints } from '..'
import MenuPage from './menuPage'

export const rankingLevels = [
  {
    keyIndex: 0,
    name: "Beginner",
    minScoreMultiplier: 0
  },
  {
    keyIndex: 1,
    name: "Good Start",
    minScoreMultiplier: .125
  },
  {
    keyIndex: 2,
    name: "Moving Up", 
    minScoreMultiplier: .25
  },
  {
    keyIndex: 3,
    name: "Good",
    minScoreMultiplier:  0.375
  },
  {
    keyIndex: 4,
    name: "Solid",
    minScoreMultiplier: 0.5
  },
  {
    keyIndex: 5,
    name: "Nice",
    minScoreMultiplier: 0.625
  },
  {
    keyIndex: 6,
    name: "Great",
    minScoreMultiplier: 0.74
  },
  {
    keyIndex: 7,
    name: "Amazing",
    minScoreMultiplier: 0.865
  },
  {
    keyIndex: 8,
    name: "Genius",
    minScoreMultiplier: 1
  },
]

interface RankingsProps {
  answers: string[]
  setShowMenuItem: (arg: null) => void
}


export default function Rankings(props: RankingsProps) {
  const { answers, setShowMenuItem } = props;
  const [answersSum, setAnswersSum] = useState(null)

  useEffect(() => {
    if (!answers) {
      return
    }
    setAnswersSum(getPoints(answers));
  }, [answers])

  return (
      <MenuPage>
      <div className='flex flex-row justify-between'>
        <h2 className="font-bold text-2xl">Rankings</h2>
        <button className='menu-icon' onClick={() => setShowMenuItem(null)}>
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
    </MenuPage>
    
  )
}