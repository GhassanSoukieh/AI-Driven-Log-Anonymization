import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const api = "http://127.0.0.1:8000/";

function App() {
  const navigate = useNavigate();

  const [welcomeMessage, setWelcomeMessage] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [anonmizedText, setAnonymizedText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [watignForResponse, setWaitingForResponse] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

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
    setWaitingForResponse(true);

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
    } finally {
      setWaitingForResponse(false);
      setDone(true);
    }
  };
  //_____________________________________________________________________________________________
  const handleStartAgain = () => {
    setSelectedFile(null);
    setAnonymizedText("");
    setFileName("");
    setDone(false);
  };

  return (
    <>
      <div className="flexCenter">
        <div className="">
          <h1 className="">AI-Driven-Log-Anonymization</h1>
          <div>{welcomeMessage}</div>
        </div>
        {watignForResponse ? (
          <div className="loader space-up"></div>
        ) : (
          <div>
            <div className="flexCenter space-up  ">
              <input
                type="file"
                name="log"
                className="hidden"
                id="logInput"
                onChange={(e) => {
                  setSelectedFile(e.target.files ? e.target.files[0] : null);
                  setFileName(e.target.files ? e.target.files[0].name : "");
                }}
              />
              <label
                htmlFor="logInput"
                className={done ? "hidden" : "inputFile"}
              >
                Choose file to upload
              </label>
              <div className={done ? "hidden" : ""}>{fileName}</div>
              <button
                className="space-up"
                onClick={done ? handleStartAgain : uploadfile}
                disabled={!selectedFile && !done}
              >
                {done ? "start again" : "anonymize"}
              </button>
              {anonmizedText && (
                <div className="flexCenter">
                  <h2>Anonymized Text:</h2>
                  <div>{anonmizedText}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
