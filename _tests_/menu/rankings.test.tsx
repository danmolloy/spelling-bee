import "@testing-library/jest-dom"
import { screen, render, fireEvent, act } from "@testing-library/react"
import Rankings, { RankingsProps, rankingLevels } from "../../components/menu/rankings"
import { mockData } from "../../_mocks_/gameData"
import { getPoints } from "../../lib/functions" 

const mockProps: RankingsProps = {
  geniusScore: 96,
  setShowMenuItem: jest.fn(),
  currentScore: Math.floor(Math.random() * 97)
}

describe("", () => {
  beforeEach(() => {
    render(<Rankings {...mockProps} />)
  })
  it("rankings-div is in the document", () => {
    const rankingsDiv = screen.getByTestId("rankings-div")
    expect(rankingsDiv).toBeInTheDocument()
  })
  it("'Rankings' title is in the document", () => {
    const rankingsTitle = screen.getByText("Rankings")
    expect(rankingsTitle).toBeInTheDocument()
  })
  it("menu-icon is in the document and calls setShowMenuItem(null) on click", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
    act(() => {
      fireEvent.click(menuIcon)
    })
    expect(mockProps.setShowMenuItem).toHaveBeenCalledWith(null)
  })
  it("helpful text is in the document", () => {
    const helpText = screen.getByTestId("help-text")
    expect(helpText).toBeInTheDocument()
    expect(helpText.textContent).toMatch("Ranks are based on a percentage of possible points in a puzzle.")
  })
  it("all ranking levels with min score is in the document", () => {
    const numPoints = mockProps.geniusScore
    for (let i = 0; i < rankingLevels.length; i ++) {
      const level = screen.getByTestId(`${rankingLevels[i].name}-level`)
      expect(level).toBeInTheDocument()
      expect(level.textContent).toMatch(rankingLevels[i].name)
      expect(level.textContent).toMatch(String(Math.floor(numPoints * rankingLevels[i].minScoreMultiplier)))
    }
  })
  //it("text states num points to next ranking", () => {})
  //it("text states num points to Genius", () => {})
})