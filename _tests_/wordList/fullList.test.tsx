import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import FullList, { FullListProps } from "../../components/wordList/fullList";
import { mockData } from "../../_mocks_/gameData";



describe("<FullList />", () => {
  const mockProps: FullListProps =  {
  words: ["dfw", "weow"],
  revealWords: false,
  answers: mockData.answers,
  pangrams: mockData.pangrams
}
  beforeEach(() => {
    render(<FullList {...mockProps} />)
  })
  it("full-list-div is in the document", () => {
    const fullList = screen.getByTestId("full-list-div")
    expect(fullList).toBeInTheDocument()
  })
  it("all found words are in the document", () => {
    for (let i = 0; i < mockProps.words.length; i ++) {
      const capitalizedWord = mockProps.words[i][0].toUpperCase() + mockProps.words[i].slice(1)
      const word = screen.getByText(capitalizedWord)
      expect(word).toBeInTheDocument()
    }
  })
  it("no answers are shown if !revealWords", () => {
    const fullList = screen.getByTestId("full-list-div")
    for (let i = 0; i < mockProps.answers.length; i ++) {
      const capitalizedWord = mockProps.answers[i][0].toUpperCase() + mockProps.answers[i].slice(1)
      expect(fullList.textContent).not.toMatch(capitalizedWord)
    }
  })
})

describe("<FullList />", () => {
  const mockProps: FullListProps =  {
    words: [],
    revealWords: true,
    answers: mockData.answers,
    pangrams: mockData.pangrams
  }
  beforeEach(() => {
    render(<FullList {...mockProps} />)
  })
  it("all answers are shown if revealWords === true", () => {
    const fullList = screen.getByTestId("full-list-div")
    for (let i = 0; i < mockProps.answers.length; i ++) {
      const capitalizedWord = mockProps.answers[i][0].toUpperCase() + mockProps.answers[i].slice(1)
      expect(fullList.textContent).toMatch(capitalizedWord)
    }
  })
})

describe("<FullList />", () => {
  const mockProps: FullListProps =  {
    words: [],
    revealWords: true,
    answers: ["lorem", "ipsum"],
    pangrams: []
  }
  beforeEach(() => {
    render(<FullList {...mockProps} />)
  })
  it("matches snapshot", () => {
    const fullList = screen.getByTestId("full-list-div")
    expect(fullList).toMatchSnapshot()
  })
}) 