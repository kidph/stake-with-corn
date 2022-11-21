import "./App.css";

import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const msgs = [
    "LOLOLOLOLOLOL NO!",
    "YOU FELL FOR THE CORNY JOKE",
    "GTFO AINT NO STAKING",
    "YOU GOT CORNED!",
    "ARRESTED.",
  ];

  function doShit() {
    setMessage(msgs[Math.floor(Math.random() * msgs.length)]);
  }
  console.log(Math.random() * msgs.length);
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "80px",
          color: "white",
          margin: "20px",
          textAlign: "center",
        }}
      >
        {message}
      </h1>
      <button className="button" onClick={doShit}>
        STAKE WITH CORN
      </button>
    </div>
  );
}

export default App;
