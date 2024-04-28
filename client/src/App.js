import React, { useEffect, useState } from "react";

function App() {
  const [backendData2, setBackendData2] = useState([]);

  useEffect(() => {
    // 로컬 개발 환경에서 React 앱이 실행 중인 경우, 프록시 설정을 확인하세요.
    fetch("http://localhost:5500/api/mysql") // 개발 환경 또는 배포 환경에 따라 URL을 조정하세요.
      .then((response) => response.json())
      .then((data) => {
        setBackendData2(data.rows);
      });
  }, []);

  return (
    <div>
      <div>11</div>
      {backendData2.map((item, index) => (
        <div key={index}>{item.description}</div>
      ))}
    </div>
  );
}

export default App;
