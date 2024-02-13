import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react"
import MenuPage, { MenuPageProps } from "../../components/menu/menuPage"

const mockProps: MenuPageProps = {
  children: <div data-testid="mock-children" />
}

describe("", () => {
  beforeEach(() => {
    render(<MenuPage {...mockProps} />)
  })
  it("menu-page is in the document", () => {
    const menuPage = screen.getByTestId("menu-page")
    expect(menuPage).toBeInTheDocument()
  })
  it("props.children is in the document", () => {
    const children = screen.getByTestId("mock-children")
    expect(children).toBeInTheDocument()
  })
  it("matches snapshot", () => {
    const menuPage = screen.getByTestId("menu-page")
    expect(menuPage).toMatchSnapshot()
  })
  /* it("page closes on blur", () => {})
  it("font matches NYT", () => {})
   */
})

