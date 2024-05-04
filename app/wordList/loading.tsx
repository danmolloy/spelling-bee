import ArrowIcon from "./arrowIcon";

export default function LoadingWordList() {
  return (
    <div data-testid="word-list" 
          className={"w-full md:w-2/5 bg-white absolute z-30 border h-12 rounded-lg p-2 flex flex-row justify-between items-center font-light mt-10 transition-all duration-300"}>
          <div data-testid="loading-div" className=" animate-pulse h-4 w-full bg-zinc-200 rounded-md m-1"/>
          <ArrowIcon showList={() => {}}/>

        </div>        
  )
}