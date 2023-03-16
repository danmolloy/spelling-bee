import useSwr from 'swr'
import GameIndex from '../components';
import Loading from '../components/loading';


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSwr('/api/bee', fetcher)

  if (!data) {
    return <Loading />
  } 

  return (
    <GameIndex data={data.data.yesterday}/>
  )
}
