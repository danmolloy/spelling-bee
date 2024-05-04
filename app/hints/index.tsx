import { AiOutlineClose } from 'react-icons/ai'
import HelpTable from './helpTable'
import { getPoints } from '../../lib/functions'
import TwoLetterList from './twoLetterList'
import { useEffect, useRef } from 'react'

export type HintsProps = {
  setShowMenuItem: (arg: string|null) => void
  answers: string[]
  pangrams: string[]
  //setRevealAnswers: () => void,
  //revealAnswers: boolean
  centerLetter: string
  validLetters: string[]
  foundWords: string[]
}

export default function Hints(props: HintsProps) {
  const { foundWords, centerLetter, validLetters, setShowMenuItem, answers, pangrams/* , setRevealAnswers */ } = props;

  
  return (
    <div  className=" h-screen  md:h-[86vh] z-40 shadow w-full backdrop-blur-sm absolute">
      <div /* tabIndex={-1}  ref={ref} onBlur={() => setTimeout(() => setShowMenuItem(null), 120)} */  data-testid="hints-div" className="rounded mx-2 mt-24 p-4 pb-8 md:mx-24 lg:mx-60 shadow-md border flex flex-col  bg-white dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800">
      <div className='flex flex-row w-full justify-between items-center'>
        <h1 className='text-2xl font-bold '>Hints</h1>
        <button data-testid="menu-icon" className='hover:text-yellow-500 text-2xl m-2 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setShowMenuItem(null)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className='p-2 font-light'>
        <p className=''>Words: {`${foundWords.length}/${answers.length}`}</p>
        <p className=''>{`Pangrams: ${foundWords.filter(i => pangrams.map(j => j.toLowerCase()).includes(i.toLowerCase())).length}/${pangrams.length}`}</p>
        <p className=''>Points: {`${getPoints(foundWords)}/${getPoints(answers)}`}</p>
      </div>
        <HelpTable foundWords={foundWords} validLetters={validLetters} centerLetter={centerLetter} answers={answers} />
      <TwoLetterList foundWords={foundWords} answers={answers} />
      </div>
    </div>
  )
}