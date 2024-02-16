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
}

export default function Hints(props: HintsProps) {
  const { centerLetter, validLetters, setShowMenuItem, answers, pangrams/* , setRevealAnswers */ } = props;

  /* const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, []) */
  
  return (
    <div  className=" h-screen  md:h-[86vh] z-40 shadow w-full backdrop-blur-sm absolute">
      <div /* tabIndex={-1}  ref={ref} onBlur={() => setTimeout(() => setShowMenuItem(null), 120)} */  data-testid="hints-div" className="rounded mx-2 mt-24 p-4 pb-8 md:mx-24 lg:mx-60 shadow-md border flex flex-col  bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800">
      <div className='flex flex-row w-full justify-between items-center'>
        <h1 className='text-2xl font-bold font-display'>Hints</h1>
        <button data-testid="menu-icon" className='hover:bg-gray-100 active:bg-gray-200 text-2xl m-2 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setShowMenuItem(null)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className='p-2'>
        <p className='text-lg'>Words: {answers.length}</p>
        <p className='text-lg'>Pangrams: {pangrams.length}</p>
        <p className='text-lg'>Points: {getPoints(answers)}</p>
      </div>
      <div className='flex flex-col items-center py-2'>
        <HelpTable validLetters={validLetters} centerLetter={centerLetter} answers={answers} />
      </div>
      <TwoLetterList answers={answers} />
      </div>
    </div>
  )
}