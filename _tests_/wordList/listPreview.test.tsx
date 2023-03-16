import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ListPreview from "../../components/wordList/listPreview";

const randNum = Math.random()

const mockProps = {
  words: randNum < .3 
    ? []
    : randNum < .6 
    ? ["Cat", "Bat", "Mat"]
    : ["Car", "Bar", "Mat", "Door", "Hat", "Dog"]
};

describe("ListPreview component", () => {
  beforeEach(() => {
    render(<ListPreview {...mockProps}/>)
  })
  it("Renders", () => {
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview).toBeInTheDocument()
  })
  it("Says 'You words...' if no words found", () => {
    if (mockProps.words.length < 1) {
      const listPreview = screen.getByTestId("list-preview")
      expect(listPreview.textContent).toMatch(/^Your words...$/)
    }
  })
  it("All words in the document if word list length < 5", () => {
    if (mockProps.words.length >= 1 && mockProps.words.length < 5) {
      const listPreview = screen.getByTestId("list-preview")
      for (let i = 0; i < mockProps.words.length; i++) {
        expect(listPreview.textContent).toMatch(mockProps.words[i])
      }
    }
  })
  it("Slices if word list length >= 5", () => {
    if (mockProps.words.length > 4) {
      const listPreview = screen.getByTestId("list-preview")
      for (let i = 0; i < mockProps.words.length; i++) {
        if (i < 4) {
          expect(listPreview.textContent).toMatch(mockProps.words[i])
        } else if ( i >= 4) {
          expect(listPreview.textContent).not.toMatch(mockProps.words[i])
        }
      }
      expect(listPreview.textContent).toMatch(/...$/)

    }
  })
})