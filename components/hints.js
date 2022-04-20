import { AiOutlineClose } from 'react-icons/ai'

export default function Hints({ showHints, answers, pangrams }) {
  return (
    <div className="slide-up how-to">
      <div className='flex flex-row w-full justify-between items-center'>
        <h1 className='text-2xl font-bold'>Hints</h1>
        <button className='menu-icon' onClick={() => showHints()}>
          <AiOutlineClose />
        </button>
      </div>
      <div className='p-2'>
        <p className='text-lg font-thin'>The current puzzle has {answers.length} words.</p>
        <p className='text-lg font-thin'>There are {pangrams.length} pangrams.</p>
      </div>

      <h2 className='text-xl font-medium pb-1'>Number of words for each length</h2>
      <div className='how-to-section pb-2'>
        <p className='font-semithin'>Four letters: <span className='font-medium'>{answers.filter(i => i.length === 4).length}</span></p>
        <p className='font-semithin'>Five letters: <span className='font-medium'>{answers.filter(i => i.length === 5).length}</span></p>
        <p className='font-semithin'>Six letters: <span className='font-medium'>{answers.filter(i => i.length === 6).length}</span></p>
        <p className='font-semithin'>Seven letters: <span className='font-medium'>{answers.filter(i => i.length === 7).length}</span></p>
        <p className='font-semithin'>Eight or more letters: <span className='font-medium'>{answers.filter(i => i.length >= 8).length}</span></p>
      </div> 
    </div>
  )
}