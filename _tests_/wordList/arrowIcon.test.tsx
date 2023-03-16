import { render, screen, act, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import ArrowIcon from "../../components/wordList/arrowIcon"

const mockProps = {
  showList: jest.fn()
}

describe("ArrowIcon component", () => {
  beforeEach(() => {
    render(<ArrowIcon {...mockProps} />)
  })
  it("Renders", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    expect(arrowIcon).toBeInTheDocument()
  })
  it("Calls showList on click", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    expect(mockProps.showList).toHaveBeenCalled()
  })
})