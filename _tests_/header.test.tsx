import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header, { HeaderProps } from "../components/header";

const mockProps: HeaderProps = {
  date: "mockDate",
  editor: "mockEditor",
  setShowMenu: jest.fn(),
}

describe("Header component", () => {
  beforeEach(() => {
    render(<Header {...mockProps} />)
  })
  it("header-div is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("game title is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch("Spelling Bee")
  })
  it("game date is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch(`${mockProps.date} (Yesterday)`)
  })
  it("game editor's name is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch(`Original NYT game edited by ${mockProps.editor}`)
  })
  it("Daniel Molloy's name is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header.textContent).toMatch(`Replicated by Daniel Molloy`)
  })
  it("menu button is in the document", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    expect(menuIcon).toBeInTheDocument()
  })
  it("menu button calls setShowMenu on click", () => {
    const menuIcon = screen.getByTestId("menu-icon")
    act(() => {
      fireEvent.click(menuIcon)
    })
    expect(mockProps.setShowMenu).toBeCalled()
  })
  it("matches snapshot", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toMatchSnapshot()
  })
})