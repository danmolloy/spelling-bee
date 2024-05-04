'use client'
import InputIndex from "./gameInput";
import Hexagon from "./gameInput/hexagon";
import UserRanking from "./rankings/userRanking";
import WordList from "./wordList";
import LoadingHeader from "./header/loading";
import LoadingHive from "./loading/loadingHive";
import LoadingRanking from "./loading/loadingRanking";
import LoadingTextInput from "./loading/loadingTextInput";
import LoadingWordList from "./wordList/loading";

export default function LoadingGameIndex() {
  return (
    <div data-testid="loading-index" className="flex flex-col items-center">
      <LoadingHeader />
      <div className="flex flex-col md:flex-row-reverse w-full">
        <div className="flex flex-col md:w-1/2 w-full md:px-2 items-center">
       <LoadingRanking />
    <LoadingWordList />
      </div>
      <div data-testid="input-index" className="mt-16 flex flex-col items-center md:w-1/2">
        <LoadingTextInput />
        <LoadingHive />
      </div>
      </div>

    </div>
  )
}