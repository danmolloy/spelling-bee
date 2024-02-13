
export type TwoLetterListProps = {
  answers: string[]
}

export default function TwoLetterList(props: TwoLetterListProps) {
  const { answers } = props;

  const initialLetters = Array.from(new Set(answers.map(i => i[0]))).sort()
  const twoLetterArr = Array.from(new Set(answers.map(i => i.slice(0, 2)))).sort()
  const combinationArr: {
    letters: string
    count: number
  }[] = twoLetterArr.map(i => ({
    letters: i.toUpperCase().slice(0, 2),
    count: answers.filter(j => j.slice(0, 2) === i.slice(0, 2)).length
  })).sort()

  return (
    <div className="p-2 my-2" data-testid="two-letter-list">
      <p className="font-bold">Two letter list:</p>
      {initialLetters.map(letter => (
        <div className="flex flex-row " key={`${letter}-row`} data-testid={`${letter}-row`}>
          {combinationArr.filter(i => i.letters[0] === letter.toUpperCase()).map(i => (
            <p className="pr-1" key={i.letters}>{`${i.letters}-${i.count}`}</p>
          ))}
        </div>
      ))}
    </div>
  )
}