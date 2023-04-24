import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <GlobalProvider>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
