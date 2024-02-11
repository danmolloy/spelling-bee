import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import AnswerList, { AnswerListProps } from "../components/answerList";
import { mockData } from "../_mocks_/gameData";
import { capitalize } from "../components/wordList";

const mockProps: AnswerListProps = {
  words:  ["cat", "hat"],
  answers: mockData.answers
}

describe("<AnswerList />", () => {
  beforeEach(() => {
    render(<AnswerList {...mockProps} />)
  })
  it("answer-list is in the document", () => {
    const answerList = screen.getByTestId("answer-list")
    expect(answerList).toBeInTheDocument()
  })
  it("showList button is in the document", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    expect(arrowIcon).toBeInTheDocument()
  })
  it("showList button shows all answers on click", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    const fullList = screen.getByTestId("full-answer-list")
    expect(fullList).toBeInTheDocument()
  })
  it("if !showList, just first 4 answers are shown", () => {
    const answerList = screen.getByTestId("answer-list")
    const sortedAnswers = mockProps.answers.map(i => capitalize(i)).sort((a, b) => a.length - b.length).slice(0, 4).join("")
    expect(answerList.textContent).toMatch(sortedAnswers)
  })
  it("answers are sorted by length", () => {
    const answerList = screen.getByTestId("answer-list")
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    const sortedAnswers = mockProps.answers.map(i => capitalize(i)).sort((a, b) => a.length - b.length).join("")
    expect(answerList.textContent).toMatch(sortedAnswers)
  })
  it("states how many words the user found when showList === true", () => {
    const answerList = screen.getByTestId("answer-list")
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    expect(answerList.textContent).toMatch(`You found ${mockProps.words.length} out of ${mockProps.answers.length} words`)

  })

})
