import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState<number>(1);

  useEffect(() => {
    const element: HTMLElement | null = document.querySelector(".App-logo");
    if (element) {
      element.style.animation = `App-logo-spin infinite ${time}s linear`;
    }
  }, [time]);

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="/#" onClick={() => setTime(1)}>
          Start Spinning
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a className="App-link" href="/#" onClick={() => setTime(0)}>
          Stop Spinning
        </a>
      </header>
    </div>
  );
}

export default App;
