import "./styles/SearchBar.css";
import { useState } from "react";

const SearchBar = ({ setKudoBoards, KudoBoards, getAllKudoBoards }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    await getAllKudoBoards();
    filter();
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value < 1) {
      getAllKudoBoards();
    }
  };

  const filter = () => {
    const query = searchQuery.toLowerCase().replace(/\s+/g, "");
    const FilteredBoards = KudoBoards.filter((Board) => {
      const title = Board.title.toLowerCase();
      return title.replace(/\s+/g, "").includes(query);
    });
    setKudoBoards(FilteredBoards);
  };

  const handleClear = () => {
    setSearchQuery("");
    getAllKudoBoards();
  };
  return (
    <div>
      <input
        type="text"
        className="SearchBar"
        placeholder={"Search for a board!"}
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      ></input>
      <button className="searchBtn" onClick={handleSearch}>
        Search
      </button>
      <button className="searchBtn" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};
export default SearchBar;
