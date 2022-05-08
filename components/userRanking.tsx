import { rankingLevels } from "./rankings";

export default function UserRanking({ rankIndex, currentPoints, data }) {

  return (
    <div className='flex flex-row w-full items-center justify-center'>
        <h3 className='flex items-center justify-center p-1  w-32 font-semibold'>{rankingLevels[rankIndex].name}</h3>
        <div className="w-full">
          <div className="ranking-bar">
          {rankingLevels.map(i => (
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
          </div>))}
            
          </div>
          <div className="line"></div>
        </div>
      </div>
  )
}