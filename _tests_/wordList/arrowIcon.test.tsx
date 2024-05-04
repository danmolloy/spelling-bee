import { render, screen, act, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import ArrowIcon from "../../app/wordList/arrowIcon"

const mockProps = {
  showList: jest.fn()
}

describe("ArrowIcon component", () => {
  beforeEach(() => {
    render(<ArrowIcon {...mockProps} />)
  })
  it("arrow-icon is in the document", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    expect(arrowIcon).toBeInTheDocument()
  })
  it("showList() is called on click", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    act(() => {
      fireEvent.click(arrowIcon)
    })
    expect(mockProps.showList).toHaveBeenCalled()
  })
  it("matches snapshot", () => {
    const arrowIcon = screen.getByTestId("arrow-icon")
    expect(arrowIcon).toMatchSnapshot()
  })
})