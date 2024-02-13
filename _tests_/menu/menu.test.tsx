import "@testing-library/jest-dom"
import { screen, render, act, fireEvent } from "@testing-library/react"
import Menu, { MenuProps, menuItems } from "../../components/menu/menu"

const mockProps: MenuProps = {
  setShowMenuItem: jest.fn(),
}

describe("", () => {
  beforeEach(() => {
    render(<Menu {...mockProps} />)
  })
  it("nav-menu is in the document", () => {
    const navMenu = screen.getByTestId("nav-menu")
    expect(navMenu).toBeInTheDocument()
  })
  it("close-btn is in the document and calls setShowMenuItem on click", () => {
    const closeBtn = screen.getByTestId("close-btn")
    expect(closeBtn).toBeInTheDocument()
    act(() => {
      fireEvent.click(closeBtn)
    })
    expect(mockProps.setShowMenuItem).toHaveBeenCalledWith(null)
  })
  it("all menu items are in the document and call setShowMenuItem(arg) on click", () => {
    for (let i = 0; i < menuItems.length; i ++) {
      const menuItem = screen.getByText(menuItems[i].name)
      expect(menuItem).toBeInTheDocument()
      act(() => {
        fireEvent.click(menuItem)
      })
      expect(mockProps.setShowMenuItem).toHaveBeenCalledWith(menuItems[i].onClickArg)
    }
  })
  it("matches snapshot", () => {
    const navMenu = screen.getByTestId("nav-menu")
    expect(navMenu).toMatchSnapshot()
  })
})