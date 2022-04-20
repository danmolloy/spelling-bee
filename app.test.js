import { act } from "react-dom/test-utils";
import { unmountComponentAtNode, render, createRoot } from "react-dom";
import Home from './pages';
import { server } from './mocks/server.js'
import { fireEvent, getByTestId, getByText } from "@testing-library/dom";

beforeAll(() => server.listen())

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  localStorage.clear()
})

afterEach(() => {
  server.resetHandlers()
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  localStorage.clear()
})

afterAll(() => server.close())


describe('App', () => {
  it("Loading Page has icon", () => {
    act(() => {
      render(<Home />, container)
    })
    expect(container.textContent).toMatch(/Loading.../gi)
    expect(container.innerHTML).toMatch(/loading-component/gi)
    
  })

  it('Fetches game data without error',  async () => {
    act(() => {
      render(<Home />, container)
    })
    expect(container.textContent).toMatch(/Loading.../gi)
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Spelling BeeApril 9, 2022/gi)
  })

})


describe('Hive Letters', () => {
  it('Each hive button appends letter to userWord', async () => {
    // Mock letters in order = AILRUVT
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Your words...\|/gi)
    act(() => fireEvent.click(getByText(container, 'A')))
    expect(container.textContent).toMatch(/Your words...A\|/gi)
    act(() => fireEvent.click(getByText(container, 'I')))
    expect(container.textContent).toMatch(/Your words...AI\|/gi)
    act(() => fireEvent.click(getByText(container, 'L')))
    expect(container.textContent).toMatch(/Your words...AIL\|/gi)
    act(() => fireEvent.click(getByText(container, 'R')))
    expect(container.textContent).toMatch(/Your words...AILR\|/gi)
    act(() => fireEvent.click(getByText(container, 'U')))
    expect(container.textContent).toMatch(/Your words...AILRU\|/gi)
    act(() => fireEvent.click(getByText(container, 'V')))
    expect(container.textContent).toMatch(/Your words...AILRUV\|/gi)
    act(() => fireEvent.click(getByText(container, 'T')))
    expect(container.textContent).toMatch(/Your words...AILRUVT\|/gi)

  })

  it("Letters can be entered using keyboard", () => {})
  it("Center letter is yellow, invalid letters gray and outer letters black", () => {})
  it("Only accepts keyDown from letters, spacebar, backspace & enter", () => {})
  it("Letters are always capital letters", () => {})
  it("Cursor blinks", () => {})
  it('Input reads "Type or click" when userWord === null', () => {})

})


describe('Input, Buttons Bar and Keyboard Controls', () => {
  it('Delete button deletes', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Your words...\|/gi)
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "R")))
    expect(container.textContent).toMatch(/Your words...AR\|/gi)
    act(() => fireEvent.click(getByText(container, "Delete")))
    expect(container.textContent).toMatch(/Your words...A\|/gi)
    act(() => fireEvent.click(getByText(container, "Delete")))
    expect(container.textContent).toMatch(/Your words...\|/gi)
    act(() => fireEvent.click(getByText(container, "Delete")))
    expect(container.textContent).toMatch(/Your words...\|/gi)
  })

  it('Backspace deletes', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Your words...\|/gi)
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "R")))
    expect(container.textContent).toMatch(/Your words...AR\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 8}))
    expect(container.textContent).toMatch(/Your words...A\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 8}))
    expect(container.textContent).toMatch(/Your words...\|/gi)
  })

  it('Shuffle button shuffles', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/AILRUVT/gi)
    act(() => fireEvent.click(getByTestId(container, "shuffle-btn")))
    expect(container.textContent).not.toMatch(/AILRUVT/gi)
  })

  it('Spacebar shuffles', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/AILRUVT/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 32}))
    expect(container.textContent).not.toMatch(/AILRUVT/gi)
  })

it('Enter button submits', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByText(container, "T")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...TRIAL\|/gi)

    act(() => fireEvent.click(getByText(container, "Enter")))
    console.log(container.textContent)
    expect(container.textContent).not.toMatch(/Your words.../gi)
    expect(container.textContent).toMatch(/TRIAL/gi)
  }) 

  it('Keyboard enter key submits', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByText(container, "T")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...TRIAL\|/gi)

    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).not.toMatch(/Your words.../gi)
    expect(container.textContent).toMatch(/TRIAL/gi)
  })
})


describe('Word List', () => {
  it("Reads 'Your words...' only when there are no words found", async () => {
  act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Your words.../gi)
    act(() => fireEvent.click(getByText(container, "T")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...TRIAL\|/gi)

    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).not.toMatch(/Your words.../gi)
    expect(container.textContent).toMatch(/TRIAL/gi)
    

  })

  it("Only adds words 4 letters or more, with user message", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "T")))
    expect(container.textContent).toMatch(/Your words...RAT\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Your words...Too short/gi)

  })

  it("Only adds words that include center letter", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByText(container, "T")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...TAIL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Your words...Missing centre letter/gi)

  })

  it("Only adds words that use words from wordlist", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 73, key: 'i'}))
    act(() => fireEvent.keyDown(container, {keyCode: 78, key: 'n'}))
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Your words...RAIN\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Your words...Not in word list/gi)

  })

  it("Only allows the same word once", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...RAIL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).not.toMatch(/Your words.../gi)
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "L")))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Beginner1RailAlready found/gi)
  })

  it("Unshifts words, i.e. adds to start of array", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })

    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...RAIL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Beginner1Rail/gi)

    act(() => fireEvent.click(getByText(container, "T")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "L")))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/TrailRail/gi)

  })

})



describe('Scoring', () => {
  it("Initial score is 0", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Beginner0Your words.../gi)
  })

  it("4-letter words are 1 point", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })

    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...RAIL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Beginner1Rail/gi)
  })

  it("5-letter words are 2 points", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })

    act(() => fireEvent.click(getByText(container, "T")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "A")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...TRAIL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Beginner2Trail/gi)
  })

  it("6-letter words are 3 points", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })

    act(() => fireEvent.click(getByText(container, "L")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "T")))
    expect(container.textContent).toMatch(/Your words...LARIAT\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Beginner3Lariat/gi)
  })

  it("Pangrams are 7 points as well as corresponding value of length", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })

    act(() => fireEvent.click(getByText(container, "V")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.click(getByText(container, "U")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "L")))

    expect(container.textContent).toMatch(/Your words...VIRTUAL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Beginner11Virtual/gi)
  })
  
  //Beginner (0) Good Start (12) Moving Up (25) Good (38) Solid (51) Nice (63) Great (75) Amazing (88) Genius (102)

  it("Beginner is 0 - 11 points, Good Start is 12 - 24 points, Moving Up from 25 points", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Beginner0/gi)
    act(() => fireEvent.click(getByText(container, "V")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.click(getByText(container, "U")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "L")))

    expect(container.textContent).toMatch(/Your words...VIRTUAL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Beginner11/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 73, key: 'i'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))

    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Good start12/gi)

    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 73, key: 'i'}))
    act(() => fireEvent.keyDown(container, {keyCode: 86, key: 'v'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 76, key: 'l'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Good start16/gi)

    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 73, key: 'i'}))
    act(() => fireEvent.keyDown(container, {keyCode: 76, key: 'l'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Good start20/gi)


    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Good start24/gi)

    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 73, key: 'i'}))
    act(() => fireEvent.keyDown(container, {keyCode: 76, key: 'l'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Moving up25/gi)

  })
})

describe('Menu', () => {
  it("Rankings Component renders without error", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByTestId(container, "menu-icon")))
    act(() => fireEvent.click(getByText(container, "Rankings")))
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Below are the minimum scores/gi)
  })
  it("How To Component renders without error", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByTestId(container, "menu-icon")))
    act(() => fireEvent.click(getByText(container, "How to Play")))
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Create words using the given letters./gi)
  })

  it("Hints Component renders without error", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByTestId(container, "menu-icon")))
    act(() => fireEvent.click(getByText(container, "Today's Hints")))
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/HintsThe current puzzle has/gi)
  }) 

})

  describe('LocalStorage', () => {
    it("If initially null, creates keys", async () => {
      act(() => {
        render(<Home />, container)
      })
      await act(async () => {
        await new Promise(res => setTimeout(res, 100))
      })
      expect(localStorage.getItem("pangrams")).toBe("")
      expect(localStorage.getItem("expiration")).toBe("16496604")
      expect(localStorage.getItem("foundWords")).toBe("")
    })

    it("Resets values if timeStamp outdated", async () => {
      localStorage.setItem("expiration", "16496604")
      localStorage.setItem("foundWords", "viral")
      act(() => {
        render(<Home />, container)
      })
      await act(async () => {
        await new Promise(res => setTimeout(res, 100))
      })
      expect(localStorage.getItem("pangrams")).toBe("")
      expect(localStorage.getItem("expiration")).toBe("16496604")
      expect(localStorage.getItem("foundWords")).toBe("")
    })

    it("Retrieves found words from earlier in the day", async () => {
      console.log(`Start of test: ${Date.now().toString().slice(0, 8)}`)
      localStorage.setItem("expiration", Date.now().toString().slice(0, 8))
      localStorage.setItem("foundWords", "viral, virtual")
      localStorage.setItem("pangrams", "virtual")
      act(() => {
        render(<Home />, container)
      })
      await act(async () => {
        await new Promise(res => setTimeout(res, 100))
      })
      console.log(`End of test: ${Date.now().toString().slice(0, 8)}`)

      expect(localStorage.getItem("expiration")).toBe(Date.now().toString().slice(0, 8))
      expect(localStorage.getItem("foundWords")).toBe("viral, virtual")
      expect(localStorage.getItem("pangrams")).toBe("virtual")
      expect(container.textContent).toMatch(/Good Start14viral virtual/gi)
      expect(container.textContent).not.toMatch(/You words.../gi)
    })

  })


describe('User messages', () => {
  it("Pangram message is 'Pangram!'", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Beginner0/gi)
    act(() => fireEvent.click(getByText(container, "V")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.click(getByText(container, "U")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "L")))
    expect(container.textContent).toMatch(/Your words...VIRTUAL\|/gi)
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Pangram!/gi)
  })

  it('Message "Missing centre letter"', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Beginner0/gi)
    act(() => fireEvent.click(getByText(container, "V")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.click(getByText(container, "U")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "L")))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Missing centre letter/gi)

  })

  it('Invalid word message is "Not in word list"', async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    expect(container.textContent).toMatch(/Beginner0/gi)
    act(() => fireEvent.click(getByText(container, "V")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.keyDown(container, {keyCode: 84, key: 't'}))
    act(() => fireEvent.click(getByText(container, "U")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Not in word list/gi)
  })

  it("Less than 4 letters message is 'Too short'", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.click(getByText(container, "V")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Too short/gi)
  })

  it("4-letter word message is 'Good!' & 5 letter word is 'Nice!'", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Good!/gi)

    act(() => fireEvent.keyDown(container, {keyCode: 86, key: 'v'}))
    act(() => fireEvent.keyDown(container, {keyCode: 73, key: 'i'}))
    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 76, key: 'l'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Nice!/gi)
  })

  it("Additional message shows how many points are added", async () => {
    act(() => {
      render(<Home />, container)
    })
    await act(async () => {
      await new Promise(res => setTimeout(res, 100))
    })
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.click(getByText(container, "R")))
    act(() => fireEvent.click(getByText(container, "I")))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Good!\+ 1/gi)

    act(() => fireEvent.keyDown(container, {keyCode: 86, key: 'v'}))
    act(() => fireEvent.keyDown(container, {keyCode: 73, key: 'i'}))
    act(() => fireEvent.keyDown(container, {keyCode: 82, key: 'r'}))
    act(() => fireEvent.keyDown(container, {keyCode: 65, key: 'a'}))
    act(() => fireEvent.keyDown(container, {keyCode: 76, key: 'l'}))
    act(() => fireEvent.keyDown(container, {keyCode: 13}))
    expect(container.textContent).toMatch(/Nice!\+ 2/gi)

  })

})