import InputIndex from "../input";
import Hexagon from "../input/hexagon";
import UserRanking from "../userRanking";
import WordList from "../wordList";
import LoadingHeader from "./loadingHeader";
import LoadingHive from "./loadingHive";
import LoadingRanking from "./loadingRanking";
import LoadingTextInput from "./loadingTextInput";
import LoadingWordList from "./loadingWordList";

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