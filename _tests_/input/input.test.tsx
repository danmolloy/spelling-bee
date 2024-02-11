import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom"
import TextInput, { InputProps } from "../../components/input/input";
import { mockData } from "../../_mocks_/gameData";

const mockProps: InputProps = {
  userWord: "",
  setUserWord: jest.fn(),
  backSpace: jest.fn(),
  revealedAnswers: false,
  searchWord: jest.fn(),
  shuffle: jest.fn(),
  outerLetters: mockData.outerLetters,
  centerLetter: mockData.centerLetter
}

describe("<TextInput />", () => {
  beforeEach(() => {
    render(<TextInput {...mockProps} />)
  })
  it("text-input is in the document", () => {
    const textInput = screen.getByTestId("text-input")
    expect(textInput).toBeInTheDocument()
  })
  it("cursor is in the document", () => {
    const textInput = screen.getByText("|")
    expect(textInput).toBeInTheDocument()
  })
  //it("logKey calls setUserWord() if valid letter",async () => {})
  //it("logKey calls shuffle() if spacebar", () => {})
  //it("logKey calls searchWord(userWord) if !revealedAnswers and enter key pressed", () => {})
})

describe("<TextInput />", () => {
  const mockProps: InputProps = {
    userWord: "mockUserWord",
    setUserWord: jest.fn(),
    backSpace: jest.fn(),
    revealedAnswers: false,
    searchWord: jest.fn(),
    shuffle: jest.fn(),
    outerLetters: mockData.outerLetters,
    centerLetter: mockData.centerLetter
  }
  beforeEach(() => {
    render(<TextInput {...mockProps} />)
  })
  it("userWord is in the document", () => {
    const textInput = screen.getByTestId("text-input")
    expect(textInput.textContent).toMatch(mockProps.userWord)
  })
})