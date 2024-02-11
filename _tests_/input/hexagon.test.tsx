import { act, fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Hexagon, { HexagonProps } from "../../components/input/hexagon"
import { mockData } from "../../_mocks_/gameData"


describe("<Hexagon />", () => {
  const mockProps: HexagonProps = {
    center: Math.random() > .5 ? true : false,
    letter: mockData.centerLetter,
    setLetter: jest.fn()
  }
  beforeEach(() => {
    render(<Hexagon {...mockProps} />)
  })
  it("hexagon-div is in the document", () => {
    const hexagonDiv = screen.getByTestId(`${mockProps.letter}-hexagon-div`)
    expect(hexagonDiv).toBeInTheDocument()
  })
  it("letter is in the document", () => {
    const hexagonDiv = screen.getByTestId(`${mockProps.letter}-hexagon-div`)
    expect(hexagonDiv.textContent).toMatch(mockProps.letter)
  })
  it("setLetter is called on click", () => {
    const hexagonDiv = screen.getByTestId(`${mockProps.letter}-hexagon-div`)
    act(() => {
      fireEvent.click(hexagonDiv)
    })
    expect(mockProps.setLetter).toBeCalled()
  })
})


describe("<Hexagon />", () => {
  const mockProps = {
    center: Math.random() > .5 ? true : false,
    letter: null,
    setLetter: jest.fn()
  }
  beforeEach(() => {
    render(<Hexagon {...mockProps} />)
  })
  it("renders without letter", () => {
    const hexagonDiv = screen.getByTestId(`${mockProps.letter}-hexagon-div`)
    expect(hexagonDiv).toBeInTheDocument()
  })
})