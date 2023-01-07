import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Addtask from "./Components/Addtask";
import ListTask from "./Components/LIstTask";

function App() {
  return (
    <div className="App">
      <Addtask />
      <ListTask />
    </div>
  );
}

export default App;