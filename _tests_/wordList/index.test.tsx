import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom"
import WordList, { WordListProps, capitalize } from "../../app/wordList";
import { mockData } from "../../_mocks_/gameData";

const mockProps: WordListProps = {
  words: mockData.answers.slice(0, 5),
  //revealWords: false,
  answers: mockData.answers,
  pangrams: mockData.pangrams,
  isLoading: false
}

describe("<WordList />", () => {
  beforeEach(() => {
    render(<WordList {...mockProps} />)
  })
  it("word-list is in the document", () => {
    const wordList = screen.getByTestId("word-list")
    expect(wordList).toBeInTheDocument()
  })
  it("<ArrowIcon /> is in the document", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    expect(arrowIcon).toBeInTheDocument()
  })
  it("List preview is default view", () => {
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview).toBeInTheDocument()
  })
  it("full list shown/hidden on arrow icon click", async () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview).toBeInTheDocument()
    await act(async () => {
      await fireEvent.click(arrowIcon)
    })
    const fullList = screen.getByTestId("full-list-div")
    expect(fullList).toBeInTheDocument()
  })
})


describe("<WordList />", () => {
  const mockProps: WordListProps = {
    words: ["cat", "mat"],
    //revealWords: false,
    answers: mockData.answers,
    pangrams: mockData.pangrams,
    isLoading: false
  }
  
  beforeEach(() => {
    render(<WordList {...mockProps} />)
  })

  it("matches snapshot", () => {
    const wordList = screen.getByTestId("word-list")
    expect(wordList).toMatchSnapshot()
  })
})


describe("capitalize()", () => {
  it("capitalizes words", () => {
    expect(capitalize("iron")).toMatch(/^Iron$/)
    expect(capitalize("IRON")).toMatch(/^Iron$/)
    expect(capitalize("Iron")).toMatch(/^Iron$/)
    expect(capitalize("iRON")).toMatch(/^Iron$/)
    expect(capitalize("yarn")).toMatch(/^Yarn$/)
    expect(capitalize("YARN")).toMatch(/^Yarn$/)
    expect(capitalize("Yarn")).toMatch(/^Yarn$/)
    expect(capitalize("yArN")).toMatch(/^Yarn$/)
  })
})