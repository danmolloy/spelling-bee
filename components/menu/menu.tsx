import { AiOutlineClose } from "react-icons/ai";
import MenuPage from "./menuPage";

const menuItems = [
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

interface MenuProps {
  setShowMenuItem: (arg: string) => void
  showMenuItem: string|null
}

export default function Menu(props: MenuProps) {
  const { setShowMenuItem, showMenuItem } = props;
  
  return (
    <MenuPage>
    <div className="mb-2 flex flex-row justify-between dark:text-zinc-400">
        <h2 className=" text-sm">Navigation</h2>
        <button className="text-lg dark:hover:text-zinc-300" onClick={() => setShowMenuItem(null)} data-testid="close-btn">
          <AiOutlineClose />
        </button>
      </div>

    {menuItems.map(i => (
      <button key={i.name} className="font-light border-b dark:border-zinc-800 py-2 my-1 px-2" onClick={() => setShowMenuItem(i.onClickArg)}>
        <p>{i.name}</p>
      </button>
    ))}
    </MenuPage>
  )
}