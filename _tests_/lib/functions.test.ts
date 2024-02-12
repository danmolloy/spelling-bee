import { mockData } from "../../_mocks_/gameData"
import { getPoints, checkLetters, encouragement, handleSubmit } from "../../lib/functions"



describe("handleSubmit()", () => {
  it("handles word length === 0", () => {
    expect(handleSubmit("", mockData, [])).toEqual({
      message: null,
      addedPoints: 0
    })
  })
  it("handles word too short", () => {
    expect(handleSubmit("bun", mockData, [])).toEqual({
      message: "Too short",
      addedPoints: 0
    })
  })
  it("handles invalid letters", () => {
    expect(handleSubmit("*2104&", mockData, [])).toEqual({
      message: "Bad letters",
      addedPoints: 0
    })
  }) 
  it("handles invalid word with valid letters", () => {
    const word = mockData.validLetters[0] +  mockData.validLetters[0] +  mockData.validLetters[0] +  mockData.validLetters[0]
    expect(handleSubmit(word, mockData, [])).toEqual({
      message: "Not in word list",
      addedPoints: 0
    })
  })
  it("handles word already found", () => {
    expect(handleSubmit(mockData.answers[0], mockData, [mockData.answers[0]])).toEqual({
      message: "Already found",
      addedPoints: 0
    })
  })
  it("handles pangram", () => {
    expect(handleSubmit(mockData.pangrams[0], mockData, [])).toEqual({
      message: "Pangram!",
      addedPoints: getPoints([mockData.pangrams[0]])
    })
  })
  it("handles valid word not yet found", () => {
    expect(handleSubmit(mockData.answers[1], mockData, [])).toEqual({
      message: encouragement(getPoints([mockData.answers[1]])),
      addedPoints: getPoints([mockData.answers[1]])
    })
  })
})

describe("encouragement()", () => {
  it("returns expected responses", () => {
    expect(encouragement(6)).toBe("Epic!")
    expect(encouragement(5)).toBe("Excellent!")
    expect(encouragement(4)).toBe("Fantastic!")
    expect(encouragement(3)).toBe("Nice!")
    expect(encouragement(2)).toBe("Great!")
    expect(encouragement(1)).toBe("Good!")
  })
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
    expect(getPoints(["1234567"])).toEqual(14) // pangram
    expect(getPoints(["12345678"])).toEqual(8) 
    expect(getPoints(["bananas"])).toEqual(7)
    expect(getPoints(["stables"])).toEqual(7)
    expect(getPoints(["uneasiness"])).toEqual(10)
  })
})