import "@testing-library/jest-dom"
import { screen, render, act, fireEvent } from "@testing-library/react"
import HowTo, { HowToProps } from "../../components/howTo"

const mockProps: HowToProps = {
  setShowMenuItem: jest.fn()
}

describe("", () => {
  beforeEach(() => {
    render(<HowTo {...mockProps} />)
  })
  it("how-to-play is in the document", () => {
    const howToPlay = screen.getByTestId("how-to-play")
    expect(howToPlay).toBeInTheDocument()
  })
  it("menu-icon is in the document and calls setShowMenuItem on click", () => {
    const menuIcon = screen.getByTestId("close-btn")
    expect(menuIcon).toBeInTheDocument()
    act(() => {
      fireEvent.click(menuIcon)
    })
    expect(mockProps.setShowMenuItem).toHaveBeenCalledWith(null)
  })
  it("rules-section is in the document", () => {
    const rulesSection = screen.getByTestId("rules-section")
    expect(rulesSection).toBeInTheDocument()
    expect(rulesSection.textContent).toMatch("Rules")
  })
  it("scoring-section is in the document", () => {
    const scoringSection = screen.getByTestId("scoring-section")
    expect(scoringSection).toBeInTheDocument()
    expect(scoringSection.textContent).toMatch("Scoring")
  })
  it("matches snapshot", () => {
    const howToPlay = screen.getByTestId("how-to-play")
    expect(howToPlay).toMatchSnapshot()
  })
})