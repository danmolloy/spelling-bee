import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Loading from "../components/loading";

describe("Loading Component", () => {
  beforeEach(() => {
    render(<Loading />)
  })
  it("Renders", () => {
    const loadingDiv = screen.getByTestId("loading-div")
    expect(loadingDiv).toBeInTheDocument()
  })
  it("Matches snapshot", () => {
    const loadingDiv = screen.getByTestId("loading-div")
    expect(loadingDiv).toMatchSnapshot()
  })
})