import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom"
import Input from "../components/input/input";

const mockProps = {
  userWord: "",
  setUserWord: jest.fn()
}

describe("Input component", () => {
  beforeEach(() => {
    render(<Input {...mockProps} />)
  })
  it("Renders", () => {
    const inputDiv = screen.getByTestId("input-div")
    expect(inputDiv).toBeInTheDocument()
  })
  //it("userWord is in the document", () => {})
  it("setUserWord is called on change", () => {
    const inputBox = screen.getByTestId("input-box")
    act(() => {
      fireEvent.change(inputBox, {target: {value: "x"}})
    })
    expect(mockProps.setUserWord).toBeCalledWith("x")
  })
})