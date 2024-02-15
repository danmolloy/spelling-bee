import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Realistic from "../../components/effects/realistic"
import ReactCanvasConfetti from "react-canvas-confetti";

jest.mock("react-canvas-confetti")

describe("<Realistic />", () => {
  beforeEach(() => {
    render(<Realistic reaction={"Pangram!"}/>)
  })
  it("realistic-div is in the document", () => {
    const realistic = screen.getByTestId("realistic-div")
    expect(realistic).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const realistic = screen.getByTestId("realistic-div")
    expect(realistic).toMatchSnapshot()
  })
})