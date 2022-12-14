import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './Home.css'

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div className="App">
      <header>
        <h1>Something New, Every Day!</h1>
      </header>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
