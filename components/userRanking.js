import { rankingLevels } from "./rankings";
import { useEffect } from 'react'

export default function UserRanking({ rankIndex, currentPoints, data }) {

  useEffect(() => {
    RankingVisual()
  }, [currentPoints])

  const RankingVisual = () => rankingLevels.map(i => (
      <div key={i.name}>
        {rankingLevels.indexOf(i) === rankIndex 
        ? <div className="current-rank-icon bounce">
            <p className="font-thin text-sm ">{currentPoints}</p>
          </div>
        : rankingLevels.indexOf(i) < rankIndex
        ? <div className="past-rank-icon"></div>
        : rankingLevels.indexOf(i) === rankingLevels.length - 1
        ? <div className="final-rank-icon"></div>
        : <div className="future-rank-icon"></div>
      }
      </div>
    ))


  return (
    <div className='flex flex-row w-full items-center justify-center'>
        <h3 className='p-1  w-32'>
          <b className="">{rankingLevels[rankIndex].name}</b>
        </h3>
        <div className="w-full">
          <div className="ranking-bar">
            <RankingVisual />
          </div>
          <div className="line"></div>
        </div>
      </div>
  )
}