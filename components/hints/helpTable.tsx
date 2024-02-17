import { IoIosCheckbox, IoIosCheckmark } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export type HelpTableProps = {
  answers: string[],
  validLetters: string[]
  centerLetter: string
  foundWords: string[]
}

export default function HelpTable(props: HelpTableProps) {
  const { foundWords, answers, validLetters, centerLetter } = props;

  const wordCountArr = Array.from(new Set(answers.map(i => i.length))).sort((a, b) => a - b)
  const wordArr = wordCountArr.map(i => ({
    length: i,
    words: answers.filter(j => j.length === i)
  }))
  const foundCombo = (
    foundWords: string[], 
    firstLetter: string, 
    wordLength: number): number => {
      return foundWords.filter(i => i[0].toLowerCase() === firstLetter.toLowerCase() && i.length === wordLength).length
  }
  const comboAnswerCount = (letter: string, words: string[]) => {
    return words.filter(i => i[0].toUpperCase() === letter.toUpperCase()).length
  }

  return (
    <div className='flex flex-col items-center py-2'>
      <div className="flex flex-row justify-between md:w-1/2 self-start md:self-auto ">
        <div className="flex flex-row items-center" data-testid="letter-label">
          <FaArrowDown />
          <p className="ml-1">Initial Letter</p>
        </div>
        <div className="flex flex-row items-center" data-testid="length-label">
          <p className="mx-2">Length of Word</p>
          <FaArrowRight />
        </div>
      </div>
    <table data-testid="help-table" className="w-2/3 md:w-1/2">
      <thead data-testid="table-head">
        <tr className="font-bold border-b">
          <td data-testid="letter-col" className="w-10 h-10"/>
          {wordCountArr.map(i => (
            <td key={i} className="w-10 h-10">
              <p className="text-center  w-full h-full flex items-center justify-center">{i}</p>
            </td>
          ))}
          <td className="w-10 h-10"><p className="text-center w-full h-full flex items-center justify-center">Total</p></td>
        </tr>
      </thead>
      <tbody>
        {validLetters.map(letter => (
          <tr className="border-b" key={letter} data-testid={`${letter}-row`}>
            <td className="font-bold w-10 h-10">
              <div className="text-center w-full h-full flex items-center justify-center">
                {letter.toUpperCase()}
              </div>
              </td>
            {wordArr.map(count => (
              <td className="border-l w-10 h-10" data-testid={`${count.length}-${letter}`} key={count.length}>
                {comboAnswerCount(letter, count.words) === 0 
                  ? <div className=""></div> 
                  : comboAnswerCount(letter, count.words) - foundCombo(foundWords, letter, count.length) === 0 
                  ? <div className="text-center text-2xl text-black w-full h-full bg-yellow-300  flex items-center justify-center">
                      <IoIosCheckmark />
                    </div>
                  : <p className="text-center w-full h-full flex items-center justify-center">{comboAnswerCount(letter, count.words) - foundCombo(foundWords, letter, count.length)}</p>}
                </td>
            ))}
            <td  data-testid={`${letter}-total`} className="border-l w-10 h-10">
              <div className="text-center w-full h-full flex items-center justify-center">
                {answers.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length === 0 
                ? <p>-</p>
                : answers.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length - foundWords.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length === 0
                ? <div className="text-center text-2xl text-black w-full h-full bg-yellow-300  flex items-center justify-center">
                    <IoIosCheckmark />
                  </div>
                : answers.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length - foundWords.filter(i => i[0].toLowerCase() === letter.toLowerCase()).length}
              </div>
            </td>
          </tr>
        ))}
        <tr data-testid="total-row">
          <td className=" w-10 h-10">
            <div className="text-center w-full h-full flex items-center justify-center">
            Total
            </div></td>
          {wordArr.map(count => (
            <td className="border-l w-10 h-10" data-testid={`${count.length}-total`} key={count.length}>
              {count.words.length - foundWords.filter(word => word.length == count.length).length === 0 
              ? <div className="text-center text-2xl text-black w-full h-full bg-yellow-300  flex items-center justify-center">
                  <IoIosCheckmark />
                </div>
              : <p className="text-center w-full h-full flex items-center justify-center">
                {count.words.length - foundWords.filter(word => word.length == count.length).length}
              </p>}
            </td>
          ))}
          <td className="text-center border-l w-10 h-10" data-testid="total-words">
            {answers.length - foundWords.length === 0 
            ? <div className="text-center text-2xl text-black w-full h-full bg-yellow-300  flex items-center justify-center">
                <IoIosCheckmark />
              </div> 
              : <p className="text-center w-full h-full flex items-center justify-center">
                  {answers.length - foundWords.length}
                </p>}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}