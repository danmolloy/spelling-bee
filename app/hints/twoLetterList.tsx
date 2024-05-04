import { IoIosCheckmark } from "react-icons/io";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";


export type TwoLetterListProps = {
  answers: string[]
  foundWords: string[]
}

export default function TwoLetterList(props: TwoLetterListProps) {
  const { foundWords, answers } = props;

  const initialLetters = Array.from(new Set(answers.map(i => i[0]))).sort()
  const twoLetterArr = Array.from(new Set(answers.map(i => i.slice(0, 2)))).sort()
  const combinationArr: {
    letters: string
    count: number
  }[] = twoLetterArr.map(i => ({
    letters: i.toUpperCase().slice(0, 2),
    count: answers.filter(j => j.slice(0, 2) === i.slice(0, 2)).length
  })).sort()

  const foundCount = (foundWords: string[], twoLetters: string): number => {
    return foundWords.filter(word => word.slice(0, 2).toUpperCase() === twoLetters).length
  }

  return (
    <div className="p-2 my-4" data-testid="two-letter-list">
      <p className="font-bold">Two-Letter List</p>
      <p className="my-2 text-sm font-light">How many words remain for each pair of starting letters.</p>
      {initialLetters.map(letter => (
        <div className="flex flex-row font-light" key={`${letter}-row`} data-testid={`${letter}-row`}>
          {combinationArr.filter(i => i.letters[0] === letter.toUpperCase()).map(i => (
            <div data-testid={`${i.letters}-cell`} className=" flex flex-row border-b m-1 h-7  items-center" key={i.letters}>
              <p className="px-1">{i.letters}</p>
              <div className="h-full w-7 flex items-center justify-center ">
              {i.count - foundCount(foundWords, i.letters) === 0 
              ? <div className="text-center text-4xl text-white w-full h-full bg-yellow-300  flex items-center justify-center">
              <IoIosCheckmark />
            </div>
              : <p>{i.count - foundCount(foundWords, i.letters)}</p>}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}