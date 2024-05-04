import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ListPreview, { ListPreviewProps } from "../../app/wordList/listPreview";
import { mockData } from "../../_mocks_/gameData";
import { capitalize } from "../../app/wordList";


const mockProps: ListPreviewProps = {
  words: mockData.answers.slice(0, 5),
  showList: false,
  //revealWords: false,
  answerLength: mockData.answers.length
};

describe("<ListPreview />", () => {
  beforeEach(() => {
    render(<ListPreview {...mockProps}/>)
  })
  it("list-preview is in the document", () => {
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview).toBeInTheDocument()
  })
  it("Says 'You words...' if no words found", () => {
    if (mockProps.words.length < 1) {
      const listPreview = screen.getByTestId("list-preview")
      expect(listPreview.textContent).toMatch(/^Your words...$/)
    }
  })

  it("slices list if !showList and word list length >= 5", () => {
    if (mockProps.words.length > 4) {
      const listPreview = screen.getByTestId("list-preview")
      for (let i = 0; i < mockProps.words.length; i++) {
        if (i < 4) {
          expect(listPreview.textContent).toMatch(capitalize(mockProps.words[i]))
        } else if ( i >= 4) {
          expect(listPreview.textContent).not.toMatch(capitalize(mockProps.words[i]))
        }
      }
      expect(listPreview.textContent).toMatch(/...$/)

    }
  })
})

describe("<ListPreview />", () => {
  const mockProps: ListPreviewProps = {
    words: mockData.answers.slice(0, 5),
    showList: false,
    //revealWords: false,
    answerLength: mockData.answers.length
  };
  beforeEach(() => {
    render(<ListPreview {...mockProps}/>)
  })
  it("if showList, all words in the document if word list length < 5", () => {
    if (mockProps.words.length >= 1 && mockProps.words.length < 5) {
      const listPreview = screen.getByTestId("list-preview")
      for (let i = 0; i < mockProps.words.length; i++) {
        expect(listPreview.textContent).toMatch(capitalize(mockProps.words[i]))
      }
    }
  })
})

/* describe("<ListPreview />", () => {
  const mockProps: ListPreviewProps = {
    words: mockData.answers.slice(0, 5),
    showList: false,
    //revealWords: true,
    answerLength: mockData.answers.length
  };
  beforeEach(() => {
    render(<ListPreview {...mockProps}/>)
  })
  it("states 'The answers...' and no words if !showList and revealWords === true", () => {
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview.textContent).toMatch("The answers...")
  })
})
 */

/* describe("<ListPreview />", () => {
  const mockProps: ListPreviewProps = {
    words: mockData.answers.slice(0, 5),
    showList: true,
    //revealWords: true,
    answerLength: mockData.answers.length
  };
  beforeEach(() => {
    render(<ListPreview {...mockProps}/>)
  })
  it("find count is in the document if showList and revealWords", () => {
    const listPreview = screen.getByTestId("list-preview")
    expect(listPreview.textContent).toMatch(`You found ${mockProps.words.length} of ${mockProps.answerLength} words`)
  })
}) */