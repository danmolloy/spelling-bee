
export type ArrowIconProps = {
  showList: () => void
}

export default function ArrowIcon(props: ArrowIconProps) {
  const  { showList } = props
  return (
    <button aria-label="Show found words" id="show-found-words" data-testid="arrow-icon" onClick={() => showList()} className="w-8 h-8 flex justify-center items-center self-start rounded-full hover:bg-gray-100 active:bg-gray-200">
      <div className="border-black border-r-2 border-b-2 h-3 w-3 self-end rotate-45 mb-3 "/>
    </button>
  )
}