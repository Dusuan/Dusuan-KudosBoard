import "./App.css";
import NoBoards from "./components/NoBoards";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import BoardPage from "./components/BoardPage";
import NotFound from "./components/NotFound"
import { fetchBoards } from "./APIHandler";
function App() {
  const [IsFormOpen, setIsFormOpen] = useState(false);
 
  return (
    <div
      className="App"
    >
      <Routes>
        <Route
          path="/"
          element={
            <Main
              IsFormOpen={IsFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          }
        ></Route>
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
