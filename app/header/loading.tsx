import { GiHamburgerMenu } from "react-icons/gi"

export default function LoadingHeader() {
  return (
    <div className=" md:p-4 flex flex-row md:justify-between w-full md:items-start justify-end " data-testid="header-div">
      <div className='hidden md:flex flex-col'>
      <div className="flex flex-row items-end">
        <h1 className="font-display font-bold text-4xl pr-4">Spelling Bee</h1>
        <div className=" animate-pulse h-8 w-60 bg-zinc-200 rounded-md m-1"/>
      </div>
      <div>
        <h2>Originally a NYT game</h2>
        <h2>Replicated by Daniel Molloy</h2>
      </div>
      </div>
      <div className='flex flex-col items-end'>
        <div aria-label="Open/close menu" id="open-menu" className='hover:bg-gray-100 active:bg-gray-200 text-2xl m-2 w-10 h-10 rounded-full flex items-center justify-center' data-testid="menu-icon" >
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  )
}

