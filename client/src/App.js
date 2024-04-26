import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((Response) => Response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return <div> {backendData.users}</div>;
}

export default App;
