export default function Hexagon({ center, letter, setLetter }) {
  return (
    <button className="hex my-16 rounded-full"  onClick={() => setLetter()}>
       <div className={center ? "center-top":"hex-top"}></div>
       <div className={center? "hex-center flex flex-col justify-center items-center": "hex-middle flex flex-col justify-center items-center"}>
        <h2 className="text-2xl font-bold">
          {letter}
        </h2>
        </div>
       <div className={center ? "center-bottom" : "hex-bottom"}></div>
     </button>
  )
}