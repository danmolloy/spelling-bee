import Hexagon from "../gameInput/hexagon";

export default function LoadingHive() {
  return (
    <div data-testid="letters-div" className="w-full fill-gray-300 justify-center flex flex-row md:p-6">
      <div className="left flex flex-col h-full ">
        <Hexagon center={false} letter={""} setLetter={() => {}}/>
        <Hexagon center={false} letter={""} setLetter={() => {}}/>
      </div>
      <div className=" flex flex-col h-full -mt-10 md:-mt-14">
        <Hexagon center={false} letter={""} setLetter={() => {}}/>
        <Hexagon center={true} letter={""} setLetter={() => {}}/>
        <Hexagon center={false} letter={""} setLetter={() => {}}/>
      </div>
      <div className="flex flex-col">
        <Hexagon center={false} letter={''} setLetter={() => {}}/>
        <Hexagon center={false} letter={""} setLetter={() => {}}/>
      </div>
    </div>
  )
}