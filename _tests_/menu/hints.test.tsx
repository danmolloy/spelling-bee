import "@testing-library/jest-dom"
import { screen, render, act, fireEvent } from "@testing-library/react"
import Hints, { HintsProps } from "../../components/menu/hints"
import { mockData } from "../../_mocks_/gameData"
import { getPoints } from "../../lib/functions"

jest.spyOn(Storage.prototype, 'setItem')
Storage.prototype.setItem = jest.fn()

const mockProps: HintsProps = {
  centerLetter: mockData.centerLetter,
  validLetters: mockData.validLetters,
  setShowMenuItem: jest.fn(),
  answers: mockData.answers,
  pangrams: ['lorem'],
  setRevealAnswers: jest.fn(),
  revealAnswers: false
}

describe("<Hints />", () => {
  beforeEach(() => {
    render(<Hints {...mockProps} />)
  })
  it("hints-div is in the document", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv).toBeInTheDocument()
  })
  it("'Hints' title is in the document", () => {
    const hintsTitle = screen.getByText("Hints")
    expect(hintsTitle).toBeInTheDocument()
  })
  it("menu-icon is in the document and calls setShowMenuItem(null) on click", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
  })
  it("states number of pangrams", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv.textContent).toMatch(`Pangrams: ${mockData.pangrams.length}`)
  })
  it("states number of answers", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv.textContent).toMatch(`Words: ${mockData.answers.length}`)
  })

  it("states number of possible points", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv.textContent).toMatch(`Points: ${getPoints(mockData.answers)}`)
  })
  
  it("help-table is in the document", () => {
    const helpTable = screen.getByTestId("help-table")
    expect(helpTable).toBeInTheDocument()
  })

  it("two-letter list is in the document", () => {
    const twoLetterList = screen.getByTestId("two-letter-list")
    expect(twoLetterList).toBeInTheDocument()
  })

  it("reveal btn is in the document and calls setRevealAnswers & setShowMenuItem on click", () => {
    const revealBtn = screen.getByText("Reveal")
    expect(revealBtn).toBeInTheDocument()
    act(() => {
      fireEvent.click(revealBtn)
    })
    expect(mockProps.setRevealAnswers).toHaveBeenCalled()
    expect(mockProps.setShowMenuItem).toHaveBeenCalledWith(null)
    expect(localStorage.setItem).toHaveBeenCalledWith("revealed", "true")
  })
})

describe("<Hints />", () => {
  const mockProps: HintsProps = {
    centerLetter: "a",
    validLetters: ["q", "a", "b", "c", "d", "e", "f"],
    setShowMenuItem: jest.fn(),
    answers: ["four", "funf", "sixsix", "seventy", "eighty"],
    pangrams: ["lorem", "ipsum"],
    setRevealAnswers: jest.fn(),
    revealAnswers: false
  }
  beforeEach(() => {
    render(<Hints {...mockProps} />)
  })
  
  it("matches snapshot", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv).toMatchSnapshot()
  })
})