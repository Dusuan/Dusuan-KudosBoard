import "./App.css";
import NoBoards from "./components/NoBoards";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import BoardPage from "./components/BoardPage";
import NotFound from "./components/NotFound"
function App() {
  const [IsFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div
      className="App"
      style={IsFormOpen ? { overflow: "hidden" } : { overflow: "none" }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Main
              IsFormOpen={IsFormOpen}
              setIsFormOpen={setIsFormOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearchChange={handleSearchChange}
            />
          }
        ></Route>
        <Route path="/smelse" element={<NoBoards />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
