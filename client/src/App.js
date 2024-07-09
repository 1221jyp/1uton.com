import "/Users/jyp/Documents/GitHub/expressjs-react/client/src/index.css";
import { List, Batsal, Sidebar, Header } from "./components/Export.js";

function App() {
  return (
    <div class="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar></Sidebar>
      <div class="flex flex-col">
        <Header></Header>
        <main class="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
          <Batsal></Batsal>
          <List></List>
        </main>
      </div>
    </div>
  );
}

export default App;
