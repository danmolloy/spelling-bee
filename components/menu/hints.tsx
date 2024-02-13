import { AiOutlineClose } from 'react-icons/ai'
import MenuPage from './menuPage'
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
    <MenuPage>
      <div data-testid="hints-div" >
      <div className='flex flex-row w-full justify-between items-center'>
        <h1 className='text-2xl font-bold'>Hints</h1>
        <button data-testid="menu-icon" className='menu-icon' onClick={() => setShowMenuItem(null)}>
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
      <h2 className='text-xl font-medium py-1 my-2'>Reveal Answers</h2>
      <div className='how-to-section flex flex-col'>
        <p className='font-semithin'>Reveal the answer list for the current game.</p>
        <button className='self-center single-btn border-0 m-1 text-bold bg-yellow-300 hover:bg-yellow-200 active:bg-black active:text-yellow-300' onClick={() => reveal()}>Reveal</button>
      </div> 
      </div>
    </MenuPage>
  )
}