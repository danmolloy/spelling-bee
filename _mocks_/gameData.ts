import { faker } from "@faker-js/faker"

//const centerLetter = faker.string.alpha();
//const outerLetters = faker.string.alpha(6).split("")
const expiration = Date.now() + 10000
const answers = faker.word.words(25).toLowerCase().split("").filter(i => i !== " ")
const lettersArr = Array.from(new Set(answers)).slice(0, 7)

const validLetters = Array.from(new Set(faker.string.alpha(12).split(""))).slice(0, 7)

export const mockData = {
  expiration: expiration,
  displayWeekday:"Sunday",
  displayDate: "October 13, 1986",
  printDate:"2022-04-10",
  centerLetter: lettersArr[0],
  outerLetters: lettersArr.slice(1, 7),
  validLetters: lettersArr,
  pangrams: [lettersArr.join("")],
  answers: [lettersArr.join(""), lettersArr.slice(1, 6).join(""), ...faker.word.words(25).split(" ")],
  id: faker.string.uuid(),
  freeExpiration:"0",
  editor:"Sam Ezersky"
}