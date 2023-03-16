import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import FullList from "../../components/wordList/fullList";

const mockProps =  {
  words: ["bat", "cat", "mat"]
}

describe("Full List component", () => {
  beforeEach(() => {
    render(<FullList {...mockProps} />)
  })
  it("Renders", () => {
    const fullList = screen.getByTestId("full-list-div")
    expect(fullList).toBeInTheDocument()
  })
  it("Word count is in the document", () => {
    const fullList = screen.getByTestId("full-list-div")
    expect(fullList.textContent).toMatch(`You have found ${mockProps.words.length} words`)
  })
  it("All words are in the document", () => {
    const fullList = screen.getByTestId("full-list-div")
    expect(fullList.textContent).toMatch(`You have found ${mockProps.words.length} wordsBatCatMat`)
  })
})