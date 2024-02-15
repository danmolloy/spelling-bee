
export type HelpTableProps = {
  answers: string[],
  validLetters: string[]
  centerLetter: string
}

export default function HelpTable(props: HelpTableProps) {
  const { answers, validLetters, centerLetter } = props;

  const wordCountArr = Array.from(new Set(answers.map(i => i.length))).sort((a, b) => a - b)
  const wordArr = wordCountArr.map(i => ({
    length: i,
    words: answers.filter(j => j.length === i)
  }))

  return (
    <table data-testid="help-table" className="w-2/3 md:w-1/2">
      <thead data-testid="table-head">
        <tr className="font-bold">
          <td data-testid="letter-col"/>
          {wordCountArr.map(i => (
            <td key={i}>
              <p className="text-center">{i}</p>
            </td>
          ))}
          <td><p className="text-center">∑</p></td>
        </tr>
      </thead>
      <tbody>
        {validLetters.map(letter => (
          <tr className="" key={letter} data-testid={`${letter}-row`}>
            <td className="font-bold">{letter.toUpperCase()}</td>
            {wordArr.map(count => (
              <td className="" data-testid={`${count.length}-${letter}`} key={count.length}>
                <p className="text-center">
                {count.words.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length > 0 ? count.words.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length : "-"}
                </p>
                </td>
            ))}
            <td  data-testid={`${letter}-total`}>
              <p className="text-center">{answers.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length}</p>
            </td>
          </tr>
        ))}
        <tr data-testid="total-row">
          <td className="font-bold">∑</td>
          {wordArr.map(count => (
            <td data-testid={`${count.length}-total`} key={count.length}>
              <p className="text-center">{count.words.length}</p>
            </td>
          ))}
          <td className="text-center" data-testid="total-words">{answers.length}</td>
        </tr>
      </tbody>
    </table>
  )
}