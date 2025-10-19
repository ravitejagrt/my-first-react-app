import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/hello1", {})
    .then((response) => setMessage(response.data))
    .catch((error) => console.error("Error fetching API: ", error));
  }, []);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>I'm Ravi Teja. This is my first react app. I'm trying to call spring boot apis from this react app and trying to dispaly some data on this react webpage.</p>
      <p>API Response: Endpoint1 /helloWord - {message}</p>
      <p>Endpoint2 - </p>
    </div>
  );
}

export default App;
