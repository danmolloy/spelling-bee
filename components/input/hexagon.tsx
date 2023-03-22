
interface HexagonProps {
  center: boolean 
  letter?: string
  setLetter: (letter: string) => void
}

export default function Hexagon(props: HexagonProps) {
  const { center, letter, setLetter } = props

  return (
    <div data-testid="hexagon-div" /* disabled={letter === undefined ? true : false} */ className={letter ? "select-none hex active:scale-90 active:border-gray-50 my-16 rounded-full " : "pulse hex active:scale-90 active:border-gray-50 my-16 rounded-full"}  onClick={() => setLetter(letter)}>
       <div className={center ? "center-top":"hex-top"}></div>
       <div className={center ? "hex-center flex flex-col justify-center items-center bg-yellow-300": "hex-middle flex flex-col justify-center items-center bg-zinc-200"}>
        {letter && <h2 className="text-2xl font-bold">
          {letter}
        </h2>}
        </div>
       <div className={center ? "center-bottom" : "hex-bottom"}></div>
     </div>
  )
}