import { useState } from 'react'

function App() {
  const [glow, setGlow] = useState("")

  return (
    <>
      <div className='container'>
        <div className={`red ${glow === "red-glow" ? "red-glow" : ""}`} onClick={
          () => setGlow("red-glow")}></div>

        <div className={`yellow ${glow === "yellow-glow" ? "yellow-glow" : ""}`} onClick={
          () => setGlow("yellow-glow")}></div>
          
        <div className={`green ${glow === "green-glow" ? "green-glow" : ""}`} onClick={
          () => setGlow("green-glow")}></div>
      </div>
      <div className="buttons">
        <button className="off" onClick={() => setGlow("")}>Turn off</button>
      </div>
    </>
  )
}

export default App