import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Encouragement, { EncouragementProps } from "../../app/effects/encouragement"

const mockProps: EncouragementProps = {
  points: Math.ceil(Math.random() * 6),
  text: "Amazing!"
}

describe("<Encouragement", () => {
  beforeEach(() => {
    render(<Encouragement {...mockProps} />)
  })
  it("encouragement-div is in the document", () => {
    const encouragementDiv = screen.getByTestId("encouragement-div")
    expect(encouragementDiv).toBeInTheDocument()
  })
  it("shows expected message with points", () => {
    const encouragementDiv = screen.getByTestId("encouragement-div")
    expect(encouragementDiv.textContent).toMatch(mockProps.text)
  })
})


describe("<Encouragement", () => {
  const mockProps: EncouragementProps = {
    points: 6,
    text: "Hooray!"
  }
  beforeEach(() => {
    render(<Encouragement {...mockProps} />)
  })
  it("matches snapshot", () => {
    const encouragementDiv = screen.getByTestId("encouragement-div")
    expect(encouragementDiv).toMatchSnapshot()
  })
})