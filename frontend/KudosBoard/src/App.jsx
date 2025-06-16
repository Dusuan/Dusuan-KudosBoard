import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  const [IsFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div
      className="App"
      style={IsFormOpen ? { overflow: "hidden" } : { overflow: "none" }}
    >
      <Header />
      <Banner searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
      <Dashboard IsFormOpen={IsFormOpen} setIsFormOpen={setIsFormOpen} />
      <Footer />
    </div>
  );
}

export default App;
