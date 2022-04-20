export default function handler(req, res) {
    fetch('https://www.nytimes.com/puzzles/spelling-bee')
      .then(res => res.text())
      .then(data => JSON.parse(data.slice(data.indexOf("gameData") + 11, data.indexOf("}}", data.indexOf("gameData")) + 2)))
      .then(data => res.status(200).json({ gameData: data}))
}