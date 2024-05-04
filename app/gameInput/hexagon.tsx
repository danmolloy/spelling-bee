
export type HexagonProps = {
  center: boolean 
  letter?: string
  setLetter: (letter: string) => void
  shuffling: boolean
}

export default function Hexagon(props: HexagonProps) {
  const { shuffling, center, letter, setLetter } = props

  return (
    <button 
      id={`${letter}-letter`}
      data-testid={`${letter}-hexagon-div`} 
      tabIndex={0}
      className={(shuffling || letter)
        ? "select-none hex active:scale-90 active:border-gray-50 my-16 rounded-full"
        : "pulse hex active:scale-90 active:border-gray-50 my-16 rounded-full"}  
      onClick={() => {letter && setLetter(letter)}}>
       <div className={center ? "center-top":"hex-top"}></div>
       <div className={center ? "hex-center flex flex-col justify-center items-center bg-yellow-300": "hex-middle flex flex-col justify-center items-center bg-zinc-200"}>
        {(shuffling && !center)
        ? <h2 className="text-2xl font-bold fade-out duration-100">
          {letter}
        </h2>
        : letter 
          && <h2 className="text-2xl font-bold fade-in transition-all duration-1000">
          {letter}
        </h2>}
        </div>
       <div className={center ? "center-bottom" : "hex-bottom"}></div>
     </button>
  )
}