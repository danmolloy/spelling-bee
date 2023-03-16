import useSwr from 'swr'
import GameIndex from '../components';


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSwr('/api/bee', fetcher)

  if (!data) {
    return;
  } 

  return (
    <GameIndex data={data.data.yesterday}/>
  )
}
