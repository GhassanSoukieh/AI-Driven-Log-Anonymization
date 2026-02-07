import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => setWelcomeMessage(data.message));
  }, []);

  return (
    <>
      <div>
        <h1>AI-Driven-Log-Anonymization</h1>
        <div>{welcomeMessage}</div>
      </div>
    </>
  );
}

export default App;
