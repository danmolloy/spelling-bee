import { useState } from "react";
import { rankingLevels } from "./menu/rankings";
import { getPoints } from ".";

interface UserRankingProps {
  answers: string[]
  userPoints: number
  isLoading?: boolean
}

export const getRanking = (userPoints: number, answers: string[]): number => {
  let ranking: number = 0
  for (let i = 0; i < rankingLevels.length; i++) {
    if (getPoints(answers) * rankingLevels[i].minScoreMultiplier <= userPoints) {
      ranking = rankingLevels[i].keyIndex
    } else if (getPoints(answers) * rankingLevels[i].minScoreMultiplier > userPoints) {
      break;
    }
  }
  return ranking
}

export default function UserRanking(props: UserRankingProps) {
  const { userPoints, answers, isLoading } = props;

  return (
    <div className='flex flex-row w-full items-center justify-center'>
        {isLoading
        ? <div className=" animate-pulse h-8 w-24 bg-zinc-200 rounded-md m-1"/>
        : <h3 className='flex items-center justify-center p-1  w-32 font-semibold'>{rankingLevels[getRanking(userPoints, answers)].name}</h3>}
        <div className="w-full">
          <div className="ranking-bar">
          {rankingLevels.map(i => (
            <div key={i.name}>
              {
                getRanking(userPoints, answers) === i.keyIndex
                ? <div className="current-rank-icon bounce">
                    <p className="font-thin text-sm ">{userPoints}</p>
                  </div>
                : getRanking(userPoints, answers) > i.keyIndex
                ? <div className="past-rank-icon"></div>
                : i.keyIndex === rankingLevels.length - 1 
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
