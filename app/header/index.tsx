import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

export type HeaderProps = {
  date?: string
  editor?: string
  setShowMenu: () => void
}

export default function Header(props: HeaderProps) {
  const { date, editor, setShowMenu } = props;

  return (
    <div className=" md:p-4 flex flex-row md:justify-between w-full md:items-start justify-end " data-testid="header-div">
      <div className='hidden md:flex flex-col'>
      <div className="flex flex-row items-end">
        <h1 className="font-display font-bold text-4xl pr-4">Spelling Bee</h1>
        {date && <h2 className='font-thin'>{date} (Yesterday)</h2>}
      </div>
      {editor &&
      <div>
        <h2>Original NYT game edited by {editor}</h2>
        <h2>Replicated by Daniel Molloy</h2>
      </div>}
      </div>
      <div className='flex flex-col items-end'>
        <button aria-label="Open/close menu" id="open-menu" className='hover:bg-gray-100 active:bg-gray-200 text-2xl m-2 w-10 h-10 rounded-full flex items-center justify-center' data-testid="menu-icon" onClick={() => setShowMenu()}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  )
}