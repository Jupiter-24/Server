import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/users/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.msg));
  }, []);

  return (
    <div className="App">
      <h1>React and Node Template</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
