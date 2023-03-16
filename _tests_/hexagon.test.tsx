import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Hexagon from "../components/input/hexagon"

const mockProps = {
  center: false,
  letter: "A",
  setLetter: jest.fn()
}

describe("Hexagon component", () => {
  beforeEach(() => {
    render(<Hexagon {...mockProps} />)
  })
  it("Renders", () => {
    const hexagonDiv = screen.getByTestId("hexagon-div")
    expect(hexagonDiv).toBeInTheDocument()
  })
  it("Letter is in the document", () => {
    const hexagonDiv = screen.getByTestId("hexagon-div")
    expect(hexagonDiv.textContent).toMatch(mockProps.letter)
  })
  it("setLetter is called on click", () => {
    const hexagonDiv = screen.getByTestId("hexagon-div")
    act(() => {
      fireEvent.click(hexagonDiv)
    })
    expect(mockProps.setLetter).toBeCalled()
  })
})