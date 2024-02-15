import { AiOutlineClose } from "react-icons/ai";

export const menuItems = [
  {
    name: "How to Play",
    onClickArg: "howTo"
  },
  {
    name: "Rankings",
    onClickArg: "rankings"
  },
  {
    name: "Today's Hints",
    onClickArg: "hints"
  },
]

export type MenuProps = {
  setShowMenuItem: (arg: string) => void
}

export default function Menu(props: MenuProps) {
  const { setShowMenuItem  } = props;
  
  return (
  <div data-testid="menu-page" className="mt-[7vh] h-[93vh] md:mt-[14vh] md:h-[86vh] z-40 shadow w-full backdrop-blur-sm absolute">
      <div className="mt-8 p-2 md:mx-24 lg:mx-60 shadow-md border flex flex-col  bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800">
      <div data-testid="nav-menu" className="mb-2 flex flex-row justify-end dark:text-zinc-400 ">
        <button className="text-lg dark:hover:text-zinc-300" onClick={() => setShowMenuItem(null)} data-testid="close-btn">
          <AiOutlineClose />
        </button>
      </div>
      {menuItems.map(i => (
        <button key={i.name} className="font-light border-b dark:border-zinc-800 py-2 my-1 px-2" onClick={() => setShowMenuItem(i.onClickArg)}>
          <p>{i.name}</p>
        </button>
      ))}
    </div>
    </div>
  )
}