import "@testing-library/jest-dom"
import { screen, render, act, fireEvent } from "@testing-library/react"
import Hints, { HintsProps } from "../../components/menu/hints"
import { mockData } from "../../_mocks_/gameData"

jest.spyOn(Storage.prototype, 'setItem')
Storage.prototype.setItem = jest.fn()

const mockProps: HintsProps = {
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
  it("states how many answers are in puzzle", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv.textContent).toMatch(`The current puzzle has ${mockProps.answers.length} words.`)
  })
  it("states number of pangrams in the singular", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv.textContent).toMatch(`There is 1 pangram.`)

  })
  it("states number of words for each length", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv.textContent).toMatch(`Four letters: ${mockProps.answers.filter(i => i.length === 4).length}`)
    expect(hintsDiv.textContent).toMatch(`Five letters: ${mockProps.answers.filter(i => i.length === 5).length}`)
    expect(hintsDiv.textContent).toMatch(`Six letters: ${mockProps.answers.filter(i => i.length === 6).length}`)
    expect(hintsDiv.textContent).toMatch(`Seven letters: ${mockProps.answers.filter(i => i.length === 7).length}`)
    expect(hintsDiv.textContent).toMatch(`Eight or more letters: ${mockProps.answers.filter(i => i.length >= 8).length}`)
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
    setShowMenuItem: jest.fn(),
    answers: ["four", "funf", "sixsix", "seventy", "eighty"],
    pangrams: ["lorem", "ipsum"],
    setRevealAnswers: jest.fn(),
    revealAnswers: false
  }
  beforeEach(() => {
    render(<Hints {...mockProps} />)
  })
  it("states number of pangrams in the plural", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv.textContent).toMatch(`There are 2 pangrams.`)
  })
  it("matches snapshot", () => {
    const hintsDiv = screen.getByTestId("hints-div")
    expect(hintsDiv).toMatchSnapshot()
  })
})