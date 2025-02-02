import "/Users/jyp/Documents/GitHub/expressjs-react/client/src/index.css";
import { Sidebar, Header } from "./components/Export";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Schedule from "./mainPage/Schedule";
import Timestamp from "./mainPage/TimeStamp";
import Newpost from "./mainPage/Newpost";
import Meal from "./mainPage/Meal";

function App() {
  return (
    <Router>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Schedule />} />
            {/* <Route path="/timestamp" element={<Timestamp />} /> */}
            <Route path="/newpost" element={<Newpost />} />
            <Route path="/meal" element={<Meal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
