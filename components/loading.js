export default function Loading() {
  return (
    <div id="loading-component" className=" h-full w-full flex flex-col items-center">
      <img src="oval.svg" alt="Spinning wheel" className="w-10 h-10 mt-12"/>
      <h2 >Loading...</h2>
    </div>
  )
}