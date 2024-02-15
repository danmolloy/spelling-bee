import { useState } from "react";
import { rankingLevels } from "./menu/rankings";
import { getPoints } from "../lib/functions";

export type UserRankingProps = {
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
    <div data-testid="user-ranking" className='flex flex-row w-full items-center justify-center '>
        <h3 className='flex items-center justify-center p-1  w-32 font-semibold'>{rankingLevels[getRanking(userPoints, answers)].name}</h3>
        <div className="w-full ">
          <div className=" flex flex-row justify-between items-center z-10 mr-2 ">
          {rankingLevels.map(i => (
            <div key={i.name}>
              {
                getRanking(userPoints, answers) === i.keyIndex
                ? <div className="w-8 h-8 rounded-full  bg-yellow-300 flex items-center justify-center bounce">
                    <p className="font-thin text-sm  ">{userPoints}</p>
                  </div>
                : getRanking(userPoints, answers) > i.keyIndex
                ? <div className="w-2 h-2 rounded-full  bg-yellow-300 flex items-center justify-center"></div>
                : i.keyIndex === rankingLevels.length - 1 
                ? <div className="w-3 h-3  bg-gray-300 flex items-center justify-center"></div>
                : <div className="w-2 h-2 rounded-full  bg-gray-300 flex items-center justify-center"></div>
              }
          </div>))}
          </div>
          <div className="border-t mx-1 mb-4 -mt-4 mr-2 "></div>
        </div>
      </div>
  )
}
