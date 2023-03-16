import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import AnswerList from "../components/answerList";

const mockProps = {
  words:  ["cat", "hat"],
  answers: ["cat", "mattress", "hat", "bicycle", "train"]
}

describe("AnswerList component", () => {
  beforeEach(() => {
    render(<AnswerList {...mockProps} />)
  })
  it("Renders", () => {
    const answerList = screen.getByTestId("answer-list")
    expect(answerList).toBeInTheDocument()
  })
  it("Preview shows first four answers", () => {
    const answerList = screen.getByTestId("answer-list")
    expect(answerList.textContent).toMatch(/CatHatTrainBicycle../)
  })
  it("ShowList button is in the document", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    expect(arrowIcon).toBeInTheDocument()
  })
  it("ShowList button shows all answers on click", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    const fullList = screen.getByTestId("full-answer-list")
    expect(fullList).toBeInTheDocument()
  })
  it("Answers are sorted by length", () => {
    const answerList = screen.getByTestId("answer-list")
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    expect(answerList.textContent).toMatch(/CatHatTrainBicycleMattress/)
  })
  it("States how many words the user found when showList === true", () => {
    const answerList = screen.getByTestId("answer-list")
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    expect(answerList.textContent).toMatch(`You found ${mockProps.words.length} out of ${mockProps.answers.length} words`)

  })

})
