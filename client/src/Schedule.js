import "/Users/jyp/Documents/GitHub/expressjs-react/client/src/index.css";
import { List, Batsal, Sidebar, Header } from "./components/Export";

function Schedule() {
  return (
    <main class="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <Batsal></Batsal>
      <List></List>
    </main>
  );
}

export default Schedule;
