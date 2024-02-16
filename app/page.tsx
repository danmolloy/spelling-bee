'use client'

import useSWR from 'swr';
import GameIndex from '../components';
import LoadingGameIndex from '../components/loading/index';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/bee', fetcher)

  if (!data) {
    return (
      <LoadingGameIndex />
    )
  } 

  return (
    <GameIndex data={data.data.yesterday}/>
  )
}