import useSWR from 'swr';
import GameIndex from '../../components';
import LoadingGameIndex from '../../components/loading';
import { mockData } from '../../_mocks_/gameData';
import Home from '../../pages';
import { act, render, screen, waitFor } from '@testing-library/react';

global.fetch = jest.fn(() =>
Promise.resolve({
  json: () => Promise.resolve({ data: {
    "today": mockData,
    "yesterday": mockData
  } }),
})
) as jest.Mock

describe("<Home />", () => {
  beforeEach(async () => {
  require("swr").useSWR = jest.fn(() => {}) 
  await act(async () => await render(<Home />))
  })
  it("<GameIndex /> is in the document", () => {
    const gameIndex = screen.getByTestId("game-index")
    for (let i = 0; i < mockData.validLetters.length; i ++) {
      expect(gameIndex.textContent).toMatch(mockData.validLetters[i].toUpperCase())
    }
  })
  //it("loading-index is in the document", () => {})

})