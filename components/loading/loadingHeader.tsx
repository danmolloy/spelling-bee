export default function LoadingHeader() {
  return (
    <div className=" md:p-4 flex flex-row md:justify-between w-full md:items-start justify-end" data-testid="header-div">
        <div className='hidden md:flex flex-col'>
        <div className="flex flex-row items-end">
        <div className=" animate-pulse h-10 w-60 bg-zinc-200 rounded-md m-1"/>
      </div>

      <div>
      <div className=" animate-pulse h-4 w-48 bg-zinc-200 rounded-md m-1 "/>
      <div className=" animate-pulse h-4 w-48 bg-zinc-200 rounded-md m-1"/>
      </div>
      </div>
      <div className=" h-10 w-10  rounded-md m-1"/>
    </div>
  )
}