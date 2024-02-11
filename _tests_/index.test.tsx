import { render, screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"
import GameIndex, { GameIndexProps, checkLetters, getPoints } from "../components";
import { mockData } from "../_mocks_/gameData";
import "react-canvas-confetti"
import { capitalize } from "../components/wordList";

jest.mock("react-canvas-confetti")

jest.spyOn(Storage.prototype, 'setItem')
Storage.prototype.setItem = jest.fn()

const mockProps: GameIndexProps = {
  data: {
    ...mockData,
    displayDate: String(mockData.displayDate)
  }
}

describe("<GameIndex />", () => {
  beforeEach(() => {
    render(<GameIndex {...mockProps} />)
  })
  it("game-index is in the document", () => {
    const gameIndex = screen.getByTestId("game-index")
    expect(gameIndex).toBeInTheDocument()
  })
  it("<Header /> is in the document", () => {
    const header = screen.getByTestId("header-div")
    expect(header).toBeInTheDocument()
  })
  it("<InputIndex /> is in the document", () => {
    const inputIndex = screen.getByTestId("input-index")
    expect(inputIndex).toBeInTheDocument()
  })
  it("<UserRanking /> is in the document", () => {
    const userRanking = screen.getByTestId("user-ranking")
    expect(userRanking).toBeInTheDocument()
  })
  it("<WordList /> is in the document", () => {
    const wordList = screen.getByTestId("word-list")
    expect(wordList).toBeInTheDocument()
  })
  it("<Realistic /> is in the document if all answers found", () => {})
  it("<Encouragement is in the document if addedPoints === true", () => {})
})

describe("enterWord()", () => {
  beforeEach(() => {
    render(<GameIndex {...mockProps} />)
  })
  it("'Too short' message if word length < 4", async () => {
    const centerLetter = screen.getByText(mockProps.data.centerLetter.toUpperCase())
    await act(async() => {
      await fireEvent.click(centerLetter)
    })
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    const message = screen.getByTestId("message")
    expect(message).toBeInTheDocument()
    expect(message.textContent).toMatch("Too short")

  })
  it("'Not in word list' message if word not in answers", async () => {
    const validWord = mockProps.data.answers[1]
    for (let i = 0; i < 5; i ++) {
      await act(async () => {
        const letter = screen.getByTestId(`${validWord[0].toUpperCase()}-hexagon-div`)
        await fireEvent.click(letter)
      })
    }
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    const message = screen.getByTestId("message")
    expect(message).toBeInTheDocument()
    expect(message.textContent).toMatch("Not in word list")

  })
  it("adds word if valid and calls expected funcs", async () => {
    const arrWord = mockProps.data.answers[1].split("")
    const textInput = screen.getByTestId("text-input")
    const wordList = screen.getByTestId("word-list")
    const userRanking = screen.getByTestId("user-ranking")
    for (let i = 0; i < arrWord.length; i ++) {
      await act(async () => {
        const letter = screen.getByTestId(`${arrWord[i].toUpperCase()}-hexagon-div`)
        await fireEvent.click(letter)
      })
    }
    expect(wordList.textContent).not.toMatch(capitalize(mockProps.data.answers[1]))
    expect(userRanking.textContent).not.toMatch(String(getPoints([mockProps.data.answers[1]])))
    expect(textInput.textContent).toMatch(`${mockProps.data.answers[1].toUpperCase()}|`)
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    expect(userRanking.textContent).toMatch(String(getPoints([mockProps.data.answers[1]])))
    expect(wordList.textContent).toMatch(capitalize(mockProps.data.answers[1]))
    expect(textInput.textContent).toMatch(/^|$/)
    expect(localStorage.setItem).toHaveBeenCalledWith("foundWords", mockProps.data.answers[1].toUpperCase())
  })
  it("celebrates if pangram found and calls expected funcs", async () => {
    const arrPangram = mockProps.data.answers[0].split("")
    const textInput = screen.getByTestId("text-input")
    const wordList = screen.getByTestId("word-list")
    const userRanking = screen.getByTestId("user-ranking")
    for (let i = 0; i < arrPangram.length; i ++) {
      await act(async () => {
        const letter = screen.getByTestId(`${arrPangram[i].toUpperCase()}-hexagon-div`)
        await fireEvent.click(letter)
      })
    }
    expect(wordList.textContent).not.toMatch(capitalize(mockProps.data.answers[0]))
    expect(userRanking.textContent).not.toMatch(String(getPoints([mockProps.data.answers[0]])))
    expect(textInput.textContent).toMatch(`${mockProps.data.answers[0].toUpperCase()}|`)
    const enterBtn = screen.getByText(/Enter/)
    act(() => {
      fireEvent.click(enterBtn)
    })
    const realistic = screen.getByTestId("realistic-div")
    expect(realistic).toBeInTheDocument()
    const gameIndex = screen.getByTestId("game-index")
    expect(gameIndex.textContent).toMatch("Epic!")
  })
  //it("states if word already found", () => {})
})

describe("checkLetters()", () => {
  it("checkLetters() is truthy when expected", () => {
    expect(checkLetters("hat", ["h", "a", "t"])).toBeTruthy()
    expect(checkLetters("HAT", ["h", "a", "t"])).toBeTruthy()
    expect(checkLetters("HAT", ["H", "A", "T"])).toBeTruthy()
    expect(checkLetters("hat", ["H", "A", "T"])).toBeTruthy()

  })
  it("checkLetters() is false when expected", () => {
    expect(checkLetters("mop", ["h", "a", "t"])).toBeFalsy()
  })
})
describe("getPoints()", () => {
  it("returns expected value", () => {
    expect(getPoints(["word"])).toEqual(1)
    expect(getPoints(["words"])).toEqual(5)
    expect(getPoints(["wordie"])).toEqual(6)
    expect(getPoints(["1234567"])).toEqual(14)// pangram
    expect(getPoints(["12345678"])).toEqual(8) 
    expect(getPoints(["bananas"])).toEqual(7)
    expect(getPoints(["stables"])).toEqual(7)
    expect(getPoints(["uneasiness"])).toEqual(10)
  })
})