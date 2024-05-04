import GameIndex from './index'

async function getData() {
  const response = await fetch('https://www.nytimes.com/puzzles/spelling-bee', { cache: 'no-store' }).then(res => res.text())
  .then(data => JSON.parse(data.slice(data.indexOf("gameData") + 11, data.indexOf("}}", data.indexOf("gameData")) + 2)))
 
  if (!response) {
    throw new Error('Failed to fetch data')
  }
 
  return response.yesterday
}


export default async function Home() {
  const data = await getData()

  return (
    <GameIndex data={data}/>
  )
}