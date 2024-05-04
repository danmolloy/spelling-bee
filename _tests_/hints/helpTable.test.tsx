import { render, screen } from "@testing-library/react"
import { mockData } from "../../_mocks_/gameData"
import "@testing-library/jest-dom"
import HelpTable, { HelpTableProps } from "../../app/hints/helpTable"

const mockProps: HelpTableProps = {
  answers: mockData.answers,
  validLetters: mockData.validLetters,
  centerLetter: mockData.centerLetter,
  foundWords: mockData.answers.slice(0, 5)
}

describe("<HelpTable />", () => {
  beforeEach(() => {
    render(<HelpTable {...mockProps} />)
  })
  it("help-table is in the document", () => {
    const helpTable = screen.getByTestId("help-table")
    expect(helpTable).toBeInTheDocument()
  })
  it("table-head contains letter cell, all word count number cells and total cell", () => {
    const tableHead = screen.getByTestId("table-head")
    expect(tableHead).toBeInTheDocument()
    const wordCountArr = Array.from(new Set(mockProps.answers.map(i => i.length))).sort((a, b) => a - b)
    for (let i = 0; i < wordCountArr.length; i ++) {
      expect(tableHead.textContent).toMatch(String(wordCountArr[i]))
    }
    const letterCol = screen.getByTestId("letter-col")
    expect(letterCol).toBeInTheDocument()
  })
  it("Y axis has 'letter' label", () => {
    const letterLabel = screen.getByTestId("letter-label")
    expect(letterLabel).toBeInTheDocument()
    expect(letterLabel.textContent).toMatch("Initial Letter")
  })
  it("X axis has 'length of word' label", () => {
    const lengthLabel = screen.getByTestId("length-label")
    expect(lengthLabel).toBeInTheDocument()
    expect(lengthLabel.textContent).toMatch("Length of Word")

  })
  it("each letter has a row with remaining word count for each word length and total remaining words", () => {
    const wordCountArr = Array.from(new Set(mockProps.answers.map(i => i.length))).sort((a, b) => a - b)
    const wordArr = wordCountArr.map(i => ({
      wordLength: i,
      words: mockProps.answers.filter(j => j.length === i)
    }))  

    for (let i = 0; i < mockProps.validLetters.length; i ++) {
      const letterRow = screen.getByTestId(`${mockProps.validLetters[i]}-row`)
      expect(letterRow).toBeInTheDocument()

      for (let j = 0; j < wordArr.length; j ++) {
        const foundCombo = mockProps.foundWords.filter(word => word[0].toLowerCase() === mockProps.validLetters[i].toLowerCase() && word.length === wordArr[j].wordLength).length
        const answerCount = mockProps.answers.filter(word => word[0].toLowerCase() === mockProps.validLetters[i].toLowerCase() && word.length === wordArr[j].wordLength).length
        const countCell = screen.getByTestId(`${wordArr[j].wordLength}-${mockProps.validLetters[i]}`)
        expect(countCell).toBeInTheDocument()
        if (answerCount - foundCombo === 0) {
          expect(countCell.textContent).not.toMatch(String(answerCount - foundCombo))
        } else {
          expect(countCell.textContent).toMatch(String(answerCount -foundCombo))
        }
      }
      const letterTotalCell = screen.getByTestId(`${mockProps.validLetters[i]}-total`)
      expect(letterTotalCell).toBeInTheDocument()
      const letterTotal = mockProps.answers.filter(j => j[0].toUpperCase() === mockProps.validLetters[i].toUpperCase()).length - mockProps.foundWords.filter(word => word[0].toLowerCase() === mockProps.validLetters[i].toLowerCase()).length
      if (letterTotal > 0) {
        expect(letterTotalCell.textContent).toMatch(String(letterTotal))
      }
    }
  })
  it("Total has row with remaining word count", () => {
    const wordCountArr = Array.from(new Set(mockProps.answers.map(i => i.length))).sort((a, b) => a - b)
    const wordArr = wordCountArr.map(i => ({
      length: i,
      words: mockProps.answers.filter(j => j.length === i)
    }))  
    const totalRow = screen.getByTestId("total-row")
    expect(totalRow.textContent).toMatch(/^Total/)
    for (let i = 0; i < wordArr.length; i ++) {
      const countCell = screen.getByTestId(`${wordArr[i].length}-total`)
      expect(countCell).toBeInTheDocument()
      const comboCount = wordArr[i].words.length - mockProps.foundWords.filter(word => word.length === wordArr[i].length).length
      if (comboCount > 0) {
        expect(countCell.textContent).toMatch(String(comboCount))
      }
    }
    const totalWords = screen.getByTestId("total-words")
    expect(totalWords).toBeInTheDocument()
    if (mockProps.answers.length - mockProps.foundWords.length > 0) {
      expect(totalWords.textContent).toMatch(String(mockProps.answers.length - mockProps.foundWords.length))
    }
  })
})