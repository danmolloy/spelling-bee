import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Letters, { LettersProps } from "../../components/input/letters";
import { mockData } from "../../_mocks_/gameData";

const mockProps: LettersProps = {
  setLetter: jest.fn(),
  centerLetter: mockData.centerLetter,
  outerLetters: mockData.outerLetters,
  letterIndex: [0, 1, 2, 3, 4, 5, 6]
}

describe("<Letters />", () => {
  beforeEach(() => {
    render(<Letters {...mockProps} />)
  })
  it("letters-div is in the document", () => {
    const lettersDiv = screen.getByTestId("letters-div")
    expect(lettersDiv).toBeInTheDocument()
  })
  it("all letters are in the document and calls setLetter(letter) on click", () => {
    const centerLetter = screen.getByText(mockProps.centerLetter)
    expect(centerLetter).toBeInTheDocument()
    act(() => {
      fireEvent.click(centerLetter)
    })
    expect(mockProps.setLetter).toHaveBeenCalledWith(mockProps.centerLetter)

    for (let i = 0; i < mockProps.outerLetters.length; i ++) {
      const letter = screen.getByText(mockProps.outerLetters[i])
      expect(letter).toBeInTheDocument()
      act(() => {
        fireEvent.click(letter)
      })
      expect(mockProps.setLetter).toHaveBeenCalledWith(mockProps.outerLetters[i])
    }
  })
})