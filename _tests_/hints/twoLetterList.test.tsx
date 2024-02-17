import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import TwoLetterList, { TwoLetterListProps } from "../../components/hints/twoLetterList"
import { mockData } from "../../_mocks_/gameData"

const mockProps: TwoLetterListProps = {
  answers: mockData.answers,
  foundWords: mockData.answers.slice(0, 5),

}

describe("<TwoLetterList />", () => {
  beforeEach(() => {
    render(<TwoLetterList {...mockProps} />)
  })
  it("two-letter-list is in the document", () => {
    const twoLetterList = screen.getByTestId("two-letter-list")
    expect(twoLetterList).toBeInTheDocument()
  })
  it("'Two letter list' title is in the document", () => {
    const title = screen.getByText("Two-Letter List:")
    expect(title).toBeInTheDocument()
  })
  it("helpful text is in the document", () => {
    const twoLetterList = screen.getByTestId("two-letter-list")
    expect(twoLetterList.textContent).toMatch("How many words remain for each pair of starting letters.")
  })
  it("each first letter of answers has own row", () => {
    const initialLetters = Array.from(new Set(mockProps.answers.map(i => i[0]))).sort()
    for (let i = 0; i < initialLetters.length; i ++) {
      const letterRow = screen.getByTestId(`${initialLetters[i]}-row`)
      expect(letterRow).toBeInTheDocument()
    }
  })
  it("each two letter combination is list with num remaining. Tick instead if === 0", () => {
    //const initialLetters = Array.from(new Set(mockProps.answers.map(i => i[0]))).sort()
    const twoLetterArr = mockProps.answers.map(i => ({
      letters: i.toUpperCase().slice(0, 2),
      count: mockProps.answers.filter(j => j.slice(0, 2) === i.slice(0, 2)).length
    })).sort()

    for (let i = 0; i < twoLetterArr.length; i ++) {
      const foundCombo = mockProps.foundWords.filter(j => j.slice(0, 2).toUpperCase() === twoLetterArr[i].letters).length
      const combination = screen.getByTestId(`${twoLetterArr[i].letters}-cell`)
      expect(combination).toBeInTheDocument()
      expect(combination.textContent).toMatch(twoLetterArr[i].letters)
      if (twoLetterArr[i].count - foundCombo === 0) {
        expect(combination.textContent).not.toMatch(String(twoLetterArr[i].count - foundCombo))
      } else {
        expect(combination.textContent).toMatch(String(twoLetterArr[i].count - foundCombo))
      }
    }
    
  })
})