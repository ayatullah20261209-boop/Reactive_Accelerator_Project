import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import TaskManager from "./Components/TaskManager/TaskManager";

function App() {
  return (
    <>
      <TaskManager /> <ToastContainer />;
    </>
  );
}

export default App;
