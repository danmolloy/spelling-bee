import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import UserRanking, { UserRankingProps, getRanking } from "../components/userRanking";
import { mockData } from "../_mocks_/gameData";
import { rankingLevels } from "../components/menu/rankings";

const mockProps: UserRankingProps = {
  answers: mockData.answers,
  userPoints: 20,
  isLoading: false
}

describe("UserRanking component", () => {
  beforeEach(() => {
    render(<UserRanking {...mockProps} />)
  })
  it("user-ranking", () => {
    const userRanking = screen.getByTestId("user-ranking")
    expect(userRanking).toBeInTheDocument()
  })
  it("ranking level name is in the document", () => {
    const userRanking = screen.getByTestId("user-ranking")
    expect(userRanking.textContent).toMatch(rankingLevels[getRanking(mockProps.userPoints, mockProps.answers)].name)
  })
  it("user points count is in the document", () => {
    const userRanking = screen.getByTestId("user-ranking")
    expect(userRanking.textContent).toMatch(String(mockProps.userPoints))
  })
})

describe("UserRanking component", () => {
  const mockProps: UserRankingProps = {
    answers: ["cat"],
    userPoints: 20,
    isLoading: false
  }
  beforeEach(() => {
    render(<UserRanking {...mockProps} />)
  })
  it("matches snapshot", () => {
    const userRanking = screen.getByTestId("user-ranking")
    expect(userRanking).toMatchSnapshot()
  })
})