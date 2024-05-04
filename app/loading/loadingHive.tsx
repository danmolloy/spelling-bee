import Hexagon from "../gameInput/hexagon";

export default function LoadingHive() {
  return (
    <div data-testid="letters-div" className="w-full fill-gray-300 justify-center flex flex-row md:p-6">
      <div className="left flex flex-col h-full ">
        <Hexagon shuffling={false} center={false} letter={""} setLetter={() => {}}/>
        <Hexagon shuffling={false} center={false} letter={""} setLetter={() => {}}/>
      </div>
      <div className=" flex flex-col h-full -mt-10 md:-mt-14">
        <Hexagon shuffling={false} center={false} letter={""} setLetter={() => {}}/>
        <Hexagon shuffling={false} center={true} letter={""} setLetter={() => {}}/>
        <Hexagon shuffling={false} center={false} letter={""} setLetter={() => {}}/>
      </div>
      <div className="flex flex-col">
        <Hexagon shuffling={false} center={false} letter={''} setLetter={() => {}}/>
        <Hexagon shuffling={false} center={false} letter={""} setLetter={() => {}}/>
      </div>
    </div>
  )
}