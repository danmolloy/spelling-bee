import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Buttons, { ButtonsProps } from "../../app/gameInput/buttons";


describe("<Buttons />", () => {
  const mockProps: ButtonsProps = {
    searchWord: jest.fn(),
    shuffle: jest.fn(),
    clearWord: jest.fn(),
    /* revealedAnswers: false */
  }
  beforeEach(() => {
    render(<Buttons {...mockProps} />)
  })
  it("<Buttons /> is in the document", () => {
    const buttonsDiv = screen.getByTestId("buttons-div")
    expect(buttonsDiv).toBeInTheDocument()
  })
  it("delete button is in the document", () => {
    const deleteBtn = screen.getByText(/Delete/)
    expect(deleteBtn).toBeInTheDocument()
  })
  it("delete button calls clearWord() on click", () => {
    const deleteBtn = screen.getByText(/Delete/)
    act(() => {
      fireEvent.click(deleteBtn)
    })
    expect(mockProps.clearWord).toBeCalled()
  })
  it("shuffle button is in the document", () => {
    const shuffleBtn = screen.getByTestId("shuffle-btn")
    expect(shuffleBtn).toBeInTheDocument()
  })
  it("shuffle button calls shuffle() on click", () => {
    const shuffleBtn = screen.getByTestId("shuffle-btn")
    act(() => {
      fireEvent.click(shuffleBtn)
    })
    expect(mockProps.shuffle).toBeCalled()
  })
  it("enter button is in the document", () => {
    const enterBtn = screen.getByText(/Enter/)
    expect(enterBtn).toBeInTheDocument()
  })
  it("enter button calls searchWord on click", () => {
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    expect(mockProps.searchWord).toBeCalled()
  })
})

/* describe("<Buttons />", () => {
  const mockProps: ButtonsProps = {
    searchWord: jest.fn(),
    shuffle: jest.fn(),
    clearWord: jest.fn(),
    //revealedAnswers: true
  }
  beforeEach(() => {
    render(<Buttons {...mockProps} />)
  })

  it("enter button is disabled if revealedAnswers === true", () => {
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    expect(mockProps.searchWord).not.toBeCalled()
  })
}) */