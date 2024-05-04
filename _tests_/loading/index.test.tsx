import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import LoadingGameIndex from "../../app/loading"

describe("<LoadingGameIndex />", () => {
  beforeEach(() => {
    render(<LoadingGameIndex />)
  })
  it("loading-index is in the document", () => {
    const loadingIndex = screen.getByTestId("loading-index")
    expect(loadingIndex).toBeInTheDocument()
  })
  it("matches snapshot", () => {

    const loadingIndex = screen.getByTestId("loading-index")
    expect(loadingIndex).toMatchSnapshot()
  })
})