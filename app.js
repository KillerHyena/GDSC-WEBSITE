import "./styles.css";
import { useState } from "react";
import Login from "./Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>KPI DASHBOARD</h1>
          <p>By Aaryan Verma </p>
          <p>Roll No: 2024UME4106</p>
        </div>
      </header>

      {isLoggedIn ? (
        <div className="iframe-container">
          <iframe
            src="https://v3.polymersearch.com/b/671a8e091e4d4800070ee0a2?m=embed"
            style={{
              height: "100vh",
              width: "100%",
              border: "none",
            }}
            title="Full-Screen Dashboard"
          ></iframe>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
