export default function Encouragement(props: {
  points: number
}) {


  return (
    <div className="z-50 self-center absolute mt-20 h-12 flex flex-row items-center">
      <div className="message px-2 py-1 h-8 flex items-center bg-white border rounded">
        {props.points > 5 
        ? <p>Epic!</p>
        : props.points === 5
        ? <p>Excellent!</p>
        : props.points === 4
        ? <p>Fantastic!</p>
        : props.points === 3
        ? <p>Nice!</p>
        : props.points === 2
        ? <p>Great!</p>
        : <p>Good!</p>
      }
      </div>
      <div className="points ml-2 flex items-center font-bold">
        + {props.points}
      </div>
    </div>

  )
}