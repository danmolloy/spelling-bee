import { capitalize } from ".";

export type ListPreviewProps = {
  words?: string[]
  showList: boolean
  //revealWords: boolean
  answerLength: number
}

export default function ListPreview(props: ListPreviewProps) {
  const { words, showList, /* revealWords, */ answerLength } = props;

  return (
    <div className="w-full flex flex-row flex-wrap " data-testid="list-preview">
      {showList  && words
      ? <p className="slide-in-text pb-4 w-full">
        {/* revealWords 
        ? `You found ${words.length} of ${answerLength} words`
        :  */`You have found ${words.length} words`}
        </p>
      : words === undefined || words.length < 1 
        ? <p className="text-gray-500">
          Your words...
          </p> 
        : words.length < 5
        ? words.map(i => (
          <p key={i} className="px-1">{capitalize(i)}</p>
        ))
        : /* !revealWords
        ?  */<div className=" w-full flex flex-row flex-wrap">{[...words].slice(0, 4).map(i => (
          <p key={i} className="px-1 ">{capitalize(i)}</p>))}
          <span className="text-gray-500 ">...</span>
          </div>
        /* : <p className="text-gray-400">The answers...</p>  */}
      </div>
  );
}