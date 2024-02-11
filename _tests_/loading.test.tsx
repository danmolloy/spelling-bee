import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Loading from "../components/loading";

describe("<Loading />", () => {
  beforeEach(() => {
    render(<Loading />)
  })
  it("loading-div is in the document", () => {
    const loadingDiv = screen.getByTestId("loading-div")
    expect(loadingDiv).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const loadingDiv = screen.getByTestId("loading-div")
    expect(loadingDiv).toMatchSnapshot()
  })
})