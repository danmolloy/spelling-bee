import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../components/header";

const mockProps = {
  date: "mock Date",
  editor: "mock Editor",
  setShowMenu: jest.fn(),
  showMenu: false
}

describe("Header component", () => {
  beforeEach(() => {
    render(<Header {...mockProps} />)
  })
  it("Renders", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("Game title is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch("Spelling Bee")
  })
  it("Game date is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch(`${mockProps.date} (Yesterday)`)
  })
  it("Game editor's name is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch(`Original NYT game edited by ${mockProps.editor}`)
  })
  it("Daniel Molloy's name is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch(`Replicated by Daniel Molloy`)
  })
  it("Menu button is in the document", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
  })
  it("Menu button calls setShowMenu on click", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    act(() => {
      fireEvent.click(menuIcon)
    })
    expect(mockProps.setShowMenu).toBeCalled()
  })
})