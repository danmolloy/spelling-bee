export type GameData = {
  expiration: number,
  displayWeekday: string
  displayDate: string,
  printDate: string,
  centerLetter: string,
  outerLetters: string[],
  validLetters: string[],
  pangrams: string[],
  answers: string[],
  id: string,
  freeExpiration: string
  editor: string
}

export const handleSubmit = (word: string, gameData: GameData, foundWords: string[]) => {
  const submitObj: {
    message: string|null
    addedPoints: number
  } =  {
    message: "",
    addedPoints: 0,
  }
  if (word.length === 0) {
    submitObj.message = null
    submitObj.addedPoints = 0
  } else if (word.length < 4) {
    submitObj.message = "Too short"
    submitObj.addedPoints = 0
  } else if (!checkLetters(word, gameData.validLetters)) {
    submitObj.message = "Bad letters"
    submitObj.addedPoints = 0
  } else if (!gameData.answers.includes(word.toLowerCase())) {
    submitObj.message = "Not in word list"
    submitObj.addedPoints = 0
  } else if (foundWords.map(i => i.toLowerCase()).includes(word.toLowerCase())) {
    submitObj.message = "Already found"
    submitObj.addedPoints = 0
  } else if(
    !foundWords.map(i => i.toLowerCase()).includes(word.toLowerCase()) 
    && gameData.pangrams.includes(word.toLowerCase())) {
      submitObj.message = "Pangram!"
      submitObj.addedPoints = getPoints([word])
  } else if (
    !foundWords.map(i => i.toLowerCase()).includes(word.toLowerCase()) 
    && gameData.answers.map(i => i.toLowerCase()).includes(word.toLowerCase())) {
    const wordPoints = getPoints([word])
    submitObj.message = encouragement(wordPoints)
    submitObj.addedPoints = wordPoints
  }
  return submitObj;
}

export const encouragement = (wordPoints: number): string => {
    return wordPoints > 5 
    ? "Epic!"
    : wordPoints === 5 
    ? "Excellent!" 
    : wordPoints === 4 
    ? "Fantastic!"
    : wordPoints === 3 
    ? "Nice!"
    : wordPoints === 2 
    ? "Great!" 
    : "Good!"
}

export const checkLetters = (word: string, letters: string[]): boolean => {
  let wordArr: string[] = word.split("").map(i => i.toUpperCase())
  for (let i = 0; i < wordArr.length; i++) {
    if (!letters.map(i => i.toUpperCase()).includes(wordArr[i])) {
      return false
    }
  }
  return true
}

export const getPoints = (wordList: string[]) => {
  let sum = 0;
  if (wordList === undefined) {
    return sum
  }

  for (let i = 0; i < wordList?.length; i++) {
    if (wordList[i].length === 4) {
      sum += 1
    } else if (wordList[i].length > 4) {
      sum += wordList[i].length
    }
  }

	let word: Set<string>;
  for (let i = 0; i < wordList.length; i++) {
    word = new Set(wordList[i].split(''))
    if (word.size === 7) {
      sum += 7
    }
  }
  
  return sum;
}