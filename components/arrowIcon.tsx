export default function ArrowIcon({ showList}) {
  return (
    <div onClick={() => showList()} className="w-8 h-8 flex justify-center items-center self-start rounded-full hover:bg-gray-100 active:bg-gray-200">
      <div className="arrow"/>
    </div>
  )
}