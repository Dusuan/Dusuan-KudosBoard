import "./App.css";
import NoBoards from "./components/NoBoards";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import BoardPage from "./components/BoardPage";
import NotFound from "./components/NotFound"
import { fetchBoards } from "./APIHandler";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false)
 
  return (
    <div
      className="App"
      data-theme={darkTheme ? "dark" : ""}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Main
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          }
        ></Route>
        <Route path="/board/:id" element={<BoardPage darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>} />
        <Route path="*" element={<NotFound  />} />
      </Routes>
    </div>
  );
}

export default App;
