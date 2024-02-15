import { AiOutlineClose } from 'react-icons/ai'
import HelpTable from './helpTable'
import { getPoints } from '../../lib/functions'
import TwoLetterList from './twoLetterList'

export type HintsProps = {
  setShowMenuItem: (arg: string|null) => void
  answers: string[]
  pangrams: string[]
  setRevealAnswers: () => void,
  revealAnswers: boolean
  centerLetter: string
  validLetters: string[]
}

export default function Hints(props: HintsProps) {
  const { centerLetter, validLetters, setShowMenuItem, answers, pangrams, setRevealAnswers } = props;

  const reveal = () => {
    setShowMenuItem(null)
    setRevealAnswers();
    localStorage.setItem('revealed', "true");
  }
  
  return (
    <div data-testid="menu-page" className="mt-[7vh] h-[93vh] md:mt-[14vh] md:h-[86vh] z-40 shadow w-full backdrop-blur-sm absolute">
      <div className="mt-8 p-2 md:mx-24 lg:mx-60 shadow-md border flex flex-col  bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800">

      <div data-testid="hints-div" >
      <div className='flex flex-row w-full justify-between items-center'>
        <h1 className='text-2xl font-bold font-display'>Hints</h1>
        <button data-testid="menu-icon" className='hover:bg-gray-100 active:bg-gray-200 text-2xl m-2 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setShowMenuItem(null)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className='p-2'>
        <p className='text-lg font-thin'>Words: {answers.length}</p>
        <p className='text-lg font-thin'>Pangrams: {pangrams.length}</p>
        <p className='text-lg font-thin'>Points: {getPoints(answers)}</p>
      </div>
      <div className='flex flex-col items-center py-2'>
        <HelpTable validLetters={validLetters} centerLetter={centerLetter} answers={answers} />
      </div>
      <TwoLetterList answers={answers} />
      <hr />
      <div className='my-2'>
        <h2 className='text-xl font-medium py-1 my-2'>Reveal Answers</h2>
        <div className='px-2 flex flex-col'>
          <p className='font-semithin'>Reveal the answer list for the current game.</p>
          <p className='font-semithin'>This will end your gameplay until the next game.</p>
          <button className='self-center  py-3 px-4 rounded-full  disabled:active:bg-white border-0 m-1 text-bold bg-yellow-300 hover:bg-yellow-200 active:bg-black active:text-yellow-300' onClick={() => reveal()}>Reveal</button>
        </div> 
      </div>
      </div>
    </div>
    </div>
  )
}