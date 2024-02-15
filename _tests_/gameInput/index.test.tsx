import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import InputIndex, { InputIndexProps } from "../../components/gameInput";
import { mockData } from "../../_mocks_/gameData";



/* I haven't checked components are passed correct props */

describe("<InputIndex />", () => {
  const mockProps: InputIndexProps = {
    centerLetter: mockData.centerLetter,
    revealedAnswers: false,
    outerLetters: mockData.outerLetters,
    enterWord: jest.fn(),
    inputWord: mockData.answers[0],
    setInputWord: jest.fn(),
    message: "mock message",
    isLoading: false
  }
  beforeEach(() => {
    render(<InputIndex {...mockProps} />)
  })

  it("input-index is in the document", () => {
    const inputIndex = screen.getByTestId("input-index")
    expect(inputIndex).toBeInTheDocument()
  })
  it("if message !== null, it is in the document", () => {
    const mockMessage = screen.getByText(mockProps.message)
    expect(mockMessage).toBeInTheDocument()
  })
  it("<TextInput /> is in the document", () => {
    const textInput = screen.getByTestId("text-input")
    expect(textInput).toBeInTheDocument()
  })
  it("<Letters /> is in the document", () => {
    const lettersDiv = screen.getByTestId("letters-div")
    expect(lettersDiv).toBeInTheDocument()
  })
  it("<Buttons /> is in the document if !isLoading", () => {
    const buttonsDiv = screen.getByTestId("buttons-div")
    expect(buttonsDiv).toBeInTheDocument()
  })
  it("backSpace() backspaces", () => {
    const centerLetter = screen.getByTestId(`${mockProps.centerLetter}-hexagon-div`)
    const textInput = screen.getByTestId('text-input')
    act(() => {
      fireEvent.click(centerLetter)
    })
    expect(textInput.textContent).toMatch(/^(a-z)|$/gi)
    const deleteBtn = screen.getByText("Delete")
    act(() => {
      fireEvent.click(deleteBtn)
    })
    expect(textInput.textContent).toMatch(/^|$/gi)

  })
  it("shuffle() shuffles", () => {
    const lettersDiv = screen.getByTestId("letters-div")
    const letters = lettersDiv.textContent
    const shuffleBtn = screen.getByTestId("shuffle-btn")
    act(() => {
      fireEvent.click(shuffleBtn)
    })
    expect(lettersDiv.textContent).not.toMatch(letters)
  })
})