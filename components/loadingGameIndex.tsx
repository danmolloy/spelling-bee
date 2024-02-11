import InputIndex from "./input";
import UserRanking from "./userRanking";
import WordList from "./wordList";

export default function LoadingGameIndex() {
  return (
    <div data-testid="loading-index" className="flex flex-col items-center">
      <div className=" md:p-4 flex flex-row md:justify-between w-full md:items-start justify-end " data-testid="header-div">
      <div className='hidden md:flex flex-col'>
      <div className="flex flex-row items-end">
        <div className=" animate-pulse h-10 w-60 bg-zinc-200 rounded-md m-1"/>
      </div>

      <div>
      <div className=" animate-pulse h-4 w-48 bg-zinc-200 rounded-md m-1"/>
      <div className=" animate-pulse h-4 w-48 bg-zinc-200 rounded-md m-1"/>


      </div>
      </div>
      <div className=" h-10 w-10  rounded-md m-1"/>

    </div>
      <div className="flex flex-col md:flex-row-reverse w-full">
        <div className="flex flex-col md:w-1/2 w-full md:px-2 items-center">
          <UserRanking isLoading={true} answers={[]} userPoints={100}/>
          <WordList isLoading={true} answers={[]} pangrams={[""]} revealWords={false} words={[]}/>
        </div>
        <InputIndex
        isLoading={true} 
        message={""}
        inputWord={""}
        setInputWord={() => {}}
        centerLetter={""} 
        revealedAnswers={false} 
        enterWord={() => {}} 
        outerLetters={[]}/>
      </div>

    </div>
  )
}