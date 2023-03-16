import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom"
import WordList, { capitalize } from "../../components/wordList";

const mockProps = {
  words: ["Car", "Bar", "Mat", "Door", "Hat", "Dog"]
}

describe("WordList component", () => {
  beforeEach(() => {
    render(<WordList {...mockProps} />)
  })
  it("Renders", () => {
    const wordList = screen.getByTestId("word-list")
    expect(wordList).toBeInTheDocument()
  })
  it("ArrowIcon is in the document", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    expect(arrowIcon).toBeInTheDocument()
  })
  it("List preview is default view", () => {
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview).toBeInTheDocument()
  })
  it("Shows/hides FullList on ArrowIcon click", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview).toBeInTheDocument()
    act(() => {
      fireEvent.click(arrowIcon)
    })
    const fullList = screen.getByTestId("full-list-div")
    expect(fullList).toBeInTheDocument()
    expect(listPreview).not.toBeInTheDocument()
  })
})

describe("Capitalize function", () => {
  it("Capitalizes words", () => {
    expect(capitalize("iron")).toMatch(/^Iron$/)
    expect(capitalize("IRON")).toMatch(/^Iron$/)
    expect(capitalize("Iron")).toMatch(/^Iron$/)
    expect(capitalize("iRON")).toMatch(/^Iron$/)
  })
})