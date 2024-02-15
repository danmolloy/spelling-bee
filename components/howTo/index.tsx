import { AiOutlineClose } from 'react-icons/ai'

export type HowToProps = {
  setShowMenuItem: (arg: null) => void
}

export default function HowTo(props: HowToProps) {
  const { setShowMenuItem } = props;
  return (
    <div data-testid="menu-page" className="mt-[7vh] h-[93vh] md:mt-[14vh] md:h-[86vh] z-40 shadow w-full backdrop-blur-sm absolute">
      <div className="mt-8 p-2 md:mx-24 lg:mx-60 shadow-md border flex flex-col  bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800">

      <div data-testid="how-to-play" className='flex flex-row w-full justify-between items-center'>
        <h1 className='text-2xl font-bold font-display'>How to Play Spelling Bee</h1>
        <button data-testid="close-btn" className='hover:bg-gray-100 active:bg-gray-200 text-2xl m-2 w-10 h-10 rounded-full flex items-center justify-center' onClick={() => setShowMenuItem(null)}>
          <AiOutlineClose />
        </button>
      </div>
      <p className='text-lg p-2 font-thin'>Create words using letters from the hive.</p>
      <div data-testid="rules-section">
        <h2 className='text-xl font-semibold'>Rules</h2>
        <div className='px-2 pb-2'>
          <p>• Words must use the center letter and be at least 4 letters long.</p>
          <p>• You can use letters more than once (e.g. <i>aardvark</i>).</p>
        </div>
      </div>
      <div data-testid="scoring-section">
        <h2 className='text-xl font-semibold'>Scoring</h2>
        <div className='px-2'>
          <p>4-letter words are worth 1 point each.</p>
          <p>Longer words earn 1 point per letter.</p>
          <p>Each puzzle contains at least one pangram, which is a word using each letter at least once. These are worth an additional 7 points.</p>
        </div>
        <div data-testid="misc-section" className='px-2 pb-2 mt-4'>
        <p>Found words are saved allowing you to return to the game throughout the day.</p>
          <p>The game is reset with new letters each day at 8:00am GMT.</p>
        </div>
      </div>
    </div>
    </div>
  )
}