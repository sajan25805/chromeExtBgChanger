import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("")
  const onClick = async () => {
    let [tab]: chrome.tabs.Tab[] = await chrome.tabs.query({ active: true });
    if (tab.id !== undefined) {
      chrome.scripting.executeScript<string[], void>({
        target: { tabId: tab.id },
        args: [color],
        func: (color) => {
          document.body.style.backgroundColor = color;
        },
      });
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <label htmlFor=""></label>
        <input id='color' className='color' type="text" onChange={(e) => setColor(e.currentTarget.value)} />
        <button onClick={() => onClick()}>Change Color</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
