import "./App.css";
import { useEffect, useState } from "react";

const api = "http://127.0.0.1:8000/";

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [anonmizedText, setAnonymizedText] = useState<string>("");

  useEffect(() => {
    fetch(`${api}`)
      .then((response) => response.json())
      .then((data) => setWelcomeMessage(data.message))
      .catch(() => {
        setWelcomeMessage(["Failed to run the backend server."]);
      });
  }, []);

  // Function to handle file upload ______________________________________________________________________________________________
  const uploadfile = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      console.log("Uploading file:", selectedFile.name);
      const data = await fetch(`${api}upload`, {
        method: "POST",
        body: formData,
      });
      const result = await data.json();
      console.log("File uploaded successfully:", result);
      setAnonymizedText(result.anonymizedText);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload the file.");
    }
  };
  //______________________________________________________________________________________________;

  return (
    <>
      <div>
        <h1>AI-Driven-Log-Anonymization</h1>
        <div>{welcomeMessage}</div>
        <div>
          <input
            type="file"
            name="log"
            id=""
            onChange={(e) =>
              setSelectedFile(e.target.files ? e.target.files[0] : null)
            }
          />
          <button className="space-up" onClick={uploadfile}>
            Anonmize
          </button>
          {anonmizedText && (
            <div>
              <h2>Anonymized Text:</h2>
              <pre>{anonmizedText}</pre>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
