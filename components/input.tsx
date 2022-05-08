
export default function Input({ userWord, setUserWord }) {

  return (
    <div>
      <input className="input" value={userWord} onChange={(e) => setUserWord(e.target.value)}></input>
    </div>
  )
}