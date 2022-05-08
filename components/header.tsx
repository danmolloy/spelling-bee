import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'


export default function Header({ data, showRankings, showHowTo, showHints }) {
  const menuItems = [
    {
      name: "How to Play",
      onClick: () => showHowTo()
    },
    {
      name: "Rankings",
      onClick: showRankings
    },
    {
      name: "Today's Hints",
      onClick: () => showHints()
    },
  ]
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="header">
      <div className='hidden md:flex flex-col'>
      <div className="flex flex-row items-end">
        <h1 className="font-extrabold text-4xl pr-4">Spelling Bee</h1>
        <h2 className='font-thin'>{data.gameData.yesterday.displayDate} (Yesterday)</h2>
      </div>
      <h2>Original NYT game edited by {data.gameData.yesterday.editor}</h2>
      <h2>Replicated by Dan Molloy</h2>
      </div>
      <div className='flex flex-col items-end'>
        <button className='menu-icon' data-testid="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu />
        </button>
        {showMenu 
        && <div className='menu'>
          {menuItems.map(i => (
            <button key={i.name} className="menu-item" onClick={() => {i.onClick(); setShowMenu(!showMenu)}}>
              <p>{i.name}</p>
            </button>
          ))}
          </div>}
      </div>
    </div>
  )
}