import GameIndex from '../components';
import Loading from '../components/loading';



export default function Home(data) {

  if (!data) {
    return <Loading />
  } 

  return (
    <GameIndex data={data.data.yesterday}/>
  )
}
 
export async function getServerSideProps() {
  const data = await fetch('https://www.nytimes.com/puzzles/spelling-bee')
            .then(res => res.text())
            .then(data => JSON.parse(data.slice(data.indexOf("gameData") + 11, data.indexOf("}}", data.indexOf("gameData")) + 2)))
            //.then(data => ({ data: data }))
  //console.log(beeData)
  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
} 