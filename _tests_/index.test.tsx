import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import GameIndex from "../components";

const mockProps = {
  data: {
    displayWeekday: "mockWeekday",
    displayDate: "mockDisplayDate",
    printDate: "mockPrintDate",
    centerLetter: "Z",
    outerLetters: ["A", "B", "C", "D", "E", "F"],
    validLetters: ["A", "B", "C", "D", "E", "F"],
    pangrams: ["pangram"],
    answers: ["pangram", "cheese"],
    id: "mockID",
    freeExpiration: "mockExpiration",
    editor: "mockEditor",
  }
}

describe("GameIndex component", () => {
  beforeEach(() => {
    render(<GameIndex {...mockProps} />)
  })
  it("Renders", () => {
    const gameIndex = screen.getByTestId("game-index")
    expect(gameIndex).toBeInTheDocument()
  })
  it("Header is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("Input is in the document", () => {
    const inputDiv = screen.getByTestId("input-div")
    expect(inputDiv).toBeInTheDocument()
  })
  it("WordList is in the document", () => {
    const wordList = screen.getByTestId("word-list")
    expect(wordList).toBeInTheDocument()
  })
  it("Letters is in the document", () => {
    const lettersDiv = screen.getByTestId("letters-div")
    expect(lettersDiv).toBeInTheDocument()
  })
  it("Buttons is in the document", () => {
    const buttonsDiv = screen.getByTestId("buttons-div")
    expect(buttonsDiv).toBeInTheDocument()
  })
})