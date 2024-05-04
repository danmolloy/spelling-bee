

export type EncouragementProps = {
  text: string
  points: number
}

export default function Encouragement(props: EncouragementProps) {
  const { text, points } = props

  return (
    <div data-testid="encouragement-div" className="z-50 self-center absolute mt-20 h-12 flex flex-row items-center">
      <div className="message px-2 py-1 h-8 flex items-center bg-white border rounded">
        <p>{text}</p>
      </div>
      <div className="points ml-2 flex items-center font-bold">
        + {points}
      </div>
    </div>

  )
}