import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Encouragement, { EncouragementProps } from "../components/encouragement"

const mockProps: EncouragementProps = {
  points: Math.ceil(Math.random() * 6) 
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
    if (mockProps.points === 1) {
      expect(encouragementDiv.textContent).toMatch("Good!")
      expect(encouragementDiv.textContent).toMatch("+ 1")
    } else if (mockProps.points === 2) {
      expect(encouragementDiv.textContent).toMatch("Great!")
      expect(encouragementDiv.textContent).toMatch("+ 2")
    } else if (mockProps.points === 3) {
      expect(encouragementDiv.textContent).toMatch("Nice!")
      expect(encouragementDiv.textContent).toMatch("+ 3")
    } else if (mockProps.points === 4) {
      expect(encouragementDiv.textContent).toMatch("Fantastic!")
      expect(encouragementDiv.textContent).toMatch("+ 4")
    } else if (mockProps.points === 5) {
      expect(encouragementDiv.textContent).toMatch("Excellent!")
      expect(encouragementDiv.textContent).toMatch("+ 5")
    } else {
      expect(encouragementDiv.textContent).toMatch("Epic!")
      expect(encouragementDiv.textContent).toMatch("+ 6")
    }
  })
})


describe("<Encouragement", () => {
  const mockProps: EncouragementProps = {
    points: 6
  }
  beforeEach(() => {
    render(<Encouragement {...mockProps} />)
  })
  it("matches snapshot", () => {
    const encouragementDiv = screen.getByTestId("encouragement-div")
    expect(encouragementDiv).toMatchSnapshot()
  })
})