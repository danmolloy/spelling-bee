import {FiRefreshCcw} from 'react-icons/fi'

interface ButtonsProps {
  searchWord: () => void
  shuffle: () => void
  clearWord: () => void
  revealedAnswers: boolean
}

export default function Buttons(props: ButtonsProps) {
  const { searchWord, shuffle, clearWord, revealedAnswers } = props;

  return (
    <div className="mt-16 flex flex-row items-center justify-center " data-testid="buttons-div">
      <button onClick={() => clearWord()} 
        className="border m-2 py-3 px-4 rounded-full active:bg-gray-100 disabled:active:bg-white select-none">
          Delete
      </button>
      <button 
        className="border m-2 p-4 rounded-full active:bg-gray-100 text-xl disabled:active:bg-white select-none" 
        data-testid='shuffle-btn' 
        onClick={() => shuffle()} >
        <FiRefreshCcw />
      </button>
      <button onClick={() => searchWord()} 
        className="border m-2 py-3 px-4 rounded-full active:bg-gray-100 disabled:active:bg-white select-none" 
        disabled={revealedAnswers}>
          Enter</button>
    </div>
  );
}