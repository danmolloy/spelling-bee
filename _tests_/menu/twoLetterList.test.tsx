import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import TwoLetterList, { TwoLetterListProps } from "../../components/menu/twoLetterList"
import { mockData } from "../../_mocks_/gameData"

const mockProps: TwoLetterListProps = {
  answers: mockData.answers
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
    const title = screen.getByText("Two letter list:")
    expect(title).toBeInTheDocument()
  })
  it("each first letter of answers has own row", () => {
    const initialLetters = Array.from(new Set(mockProps.answers.map(i => i[0]))).sort()
    for (let i = 0; i < initialLetters.length; i ++) {
      const letterRow = screen.getByTestId(`${initialLetters[i]}-row`)
      expect(letterRow).toBeInTheDocument()
    }
  })
  it("each two letter combination is list with count", () => {
    //const initialLetters = Array.from(new Set(mockProps.answers.map(i => i[0]))).sort()
    const twoLetterArr = mockProps.answers.map(i => ({
      letters: i.toUpperCase().slice(0, 2),
      count: mockProps.answers.filter(j => j.slice(0, 2) === i.slice(0, 2)).length
    })).sort()

    for (let i = 0; i < twoLetterArr.length; i ++) {
      const combination = screen.getByText(`${twoLetterArr[i].letters}-${twoLetterArr[i].count}`)
      expect(combination).toBeInTheDocument()
    }
    
  })
})