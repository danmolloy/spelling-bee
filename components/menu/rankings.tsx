import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { getPoints } from '../../lib/functions'
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

export type RankingsProps = {
  setShowMenuItem: (arg: null) => void
  geniusScore: number
  currentScore: number
}


export default function Rankings(props: RankingsProps) {
  const { setShowMenuItem, geniusScore, currentScore } = props;

  const currentRanking = rankingLevels[rankingLevels.filter(i => Math.floor(geniusScore * i.minScoreMultiplier) <= currentScore).length - 1]
  const nextRanking = rankingLevels[rankingLevels.filter(i => Math.floor(geniusScore * i.minScoreMultiplier) <= currentScore).length]
  return (
      <MenuPage>
      <div data-testid="rankings-div" className='flex flex-row justify-between '>
        <h2 className="font-bold text-2xl font-display">Rankings</h2>
        <button data-testid="menu-icon" className='hover:bg-gray-100 active:bg-gray-200 text-2xl m-2 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setShowMenuItem(null)}>
          <AiOutlineClose />
        </button>
      </div>
      <div data-testid="help-text" className='p-4 font-semithin text-lg'>   
        <p>Ranks are based on a percentage of possible points in a puzzle.</p>
      </div>
      <div>
        <div className='flex flex-row font-bold justify-between px-2'>
          <p className='ml-12 '>Rank</p>
          <p >Minimum score</p>
        </div>
        <div className=' '>
          {rankingLevels.map(i => (
            <div data-testid={`${i.name}-level`} key={i.name} className={`${i.minScoreMultiplier === currentRanking.minScoreMultiplier ? "bg-yellow-300 rounded-full font-bold" : i.minScoreMultiplier < currentRanking.minScoreMultiplier ? "text-gray-400" : ""} px-4 py-2 flex flex-row justify-between items-center`}>
              {i.minScoreMultiplier === currentRanking.minScoreMultiplier 
              ? <div className='m-2 flex '>
                  <p>{currentScore}</p>
                </div>
              : <div className={` w-2 h-2 m-2 mx-4 ${i.minScoreMultiplier < currentRanking.minScoreMultiplier ? "bg-yellow-300 rounded-full" : i.minScoreMultiplier < 1 ? "bg-gray-300 rounded-full" :  "bg-gray-300"}  flex items-center justify-center`} />}
              <div>
                <p>{i.name}</p>
                {i.minScoreMultiplier === currentRanking.minScoreMultiplier 
                && <div className='text-xs font-normal'>
                    <p>{Math.floor(geniusScore *  nextRanking.minScoreMultiplier)} points to next rank, {geniusScore - currentScore} points to Genius</p>
                  </div>}
              </div>
              <div className=' flex flex-grow items-center px-4'>
                {i.name !== currentRanking.name && <hr className='hidden md:flex w-full'/>}
              </div>
              <p>{Math.floor(i.minScoreMultiplier * geniusScore)}</p>
            </div>
          )).reverse()}
        </div>
      </div>
    </MenuPage>
    
  )
}