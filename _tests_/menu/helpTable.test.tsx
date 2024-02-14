import { render, screen } from "@testing-library/react"
import { mockData } from "../../_mocks_/gameData"
import "@testing-library/jest-dom"
import HelpTable, { HelpTableProps } from "../../components/menu/helpTable"

const mockProps: HelpTableProps = {
  answers: mockData.answers,
  validLetters: mockData.validLetters,
  centerLetter: mockData.centerLetter
}

describe("<HelpTable />", () => {
  beforeEach(() => {
    render(<HelpTable {...mockProps} />)
  })
  it("help-table is in the document", () => {
    const helpTable = screen.getByTestId("help-table")
    expect(helpTable).toBeInTheDocument()
  })
  it("table-head contains letter cell, all word count number cells and ∑ cell", () => {
    const tableHead = screen.getByTestId("table-head")
    expect(tableHead).toBeInTheDocument()
    const wordCountArr = Array.from(new Set(mockProps.answers.map(i => i.length))).sort((a, b) => a - b)
    for (let i = 0; i < wordCountArr.length; i ++) {
      expect(tableHead.textContent).toMatch(String(wordCountArr[i]))
    }
    const letterCol = screen.getByTestId("letter-col")
    expect(letterCol).toBeInTheDocument()
  })
  it("each letter has a row with word count for each word length and total words", () => {
    const wordCountArr = Array.from(new Set(mockProps.answers.map(i => i.length))).sort((a, b) => a - b)
    const wordArr = wordCountArr.map(i => ({
      length: i,
      words: mockProps.answers.filter(j => j.length === i)
    }))  

    for (let i = 0; i < mockProps.validLetters.length; i ++) {
      const letterRow = screen.getByTestId(`${mockProps.validLetters[i]}-row`)
      expect(letterRow).toBeInTheDocument()

      for (let j = 0; j < wordArr.length; j ++) {
        const cellWordCount = wordArr[j].words.filter(x => x[0].toLowerCase() === mockProps.validLetters[i].toLowerCase()).length > 0 
          ? String(wordArr[j].words.filter(x => x[0].toLowerCase() === mockProps.validLetters[i].toLowerCase()).length)
          : "";
          
        const countCell = screen.getByTestId(`${wordArr[j].length}-${mockProps.validLetters[i]}`)
        expect(countCell).toBeInTheDocument()
        expect(countCell.textContent).toMatch(cellWordCount)
      }
      const letterTotal = screen.getByTestId(`${mockProps.validLetters[i]}-total`)
      expect(letterTotal).toBeInTheDocument()
      expect(letterTotal.textContent).toMatch(String(mockProps.answers.filter(j => j[0].toUpperCase() === mockProps.validLetters[i].toUpperCase()).length))
    }
  })
  it("∑ has row with word count", () => {
    const wordCountArr = Array.from(new Set(mockProps.answers.map(i => i.length))).sort((a, b) => a - b)
    const wordArr = wordCountArr.map(i => ({
      length: i,
      words: mockProps.answers.filter(j => j.length === i)
    }))  
    const totalRow = screen.getByTestId("total-row")
    expect(totalRow.textContent).toMatch(/^∑/)
    for (let i = 0; i < wordArr.length; i ++) {
      const countCell = screen.getByTestId(`${wordArr[i].length}-total`)
      expect(countCell).toBeInTheDocument()
      expect(countCell.textContent).toMatch(String(wordArr[i].words.length))
    }
    const totalWords = screen.getByTestId("total-words")
    expect(totalWords).toBeInTheDocument()
    expect(totalWords.textContent).toMatch(String(mockProps.answers.length))
  })
})