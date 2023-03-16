import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Buttons from "../components/input/buttons";


describe("Buttons component", () => {
  const mockProps = {
    searchWord: jest.fn(),
    shuffle: jest.fn(),
    clearWord: jest.fn(),
    revealedAnswers: false
  }
  beforeEach(() => {
    render(<Buttons {...mockProps} />)
  })
  it("Renders", () => {
    const buttonsDiv = screen.getByTestId("buttons-div")
    expect(buttonsDiv).toBeInTheDocument()
  })
  it("Delete button is in the document", () => {
    const deleteBtn = screen.getByText(/Delete/)
    expect(deleteBtn).toBeInTheDocument()
  })
  it("Delete button calls clearWord on click", () => {
    const deleteBtn = screen.getByText(/Delete/)
    act(() => {
      fireEvent.click(deleteBtn)
    })
    expect(mockProps.clearWord).toBeCalled()
  })
  it("Shuffle button is in the document", () => {
    const shuffleBtn = screen.getByTestId("shuffle-btn")
    expect(shuffleBtn).toBeInTheDocument()
  })
  it("Shuffle button calls shuffle on click", () => {
    const shuffleBtn = screen.getByTestId("shuffle-btn")
    act(() => {
      fireEvent.click(shuffleBtn)
    })
    expect(mockProps.shuffle).toBeCalled()
  })
  it("Enter button is in the document", () => {
    const enterBtn = screen.getByText(/Enter/)
    expect(enterBtn).toBeInTheDocument()
  })
  it("Enter button calls searchWord on click", () => {
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    expect(mockProps.searchWord).toBeCalled()
  })
})

describe("Buttons component with revealed answers", () => {
  const mockProps = {
    searchWord: jest.fn(),
    shuffle: jest.fn(),
    clearWord: jest.fn(),
    revealedAnswers: true
  }
  beforeEach(() => {
    render(<Buttons {...mockProps} />)
  })
  it("Renders", () => {
    const buttonsDiv = screen.getByTestId("buttons-div")
    expect(buttonsDiv).toBeInTheDocument()
  })
  it("Enter button is disabled and does not call searchWord on click", () => {
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    expect(mockProps.searchWord).not.toBeCalled()
  })
})