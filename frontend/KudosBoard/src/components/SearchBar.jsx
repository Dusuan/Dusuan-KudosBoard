import "./styles/SearchBar.css";

const SearchBar = ({
  handleSearchChange,
  searchQuery,
  setSearchQuery,
  setKudoBoards,
  KudoBoards,
  getAllKudoBoards,
}) => {
  const handleSearch = () => {
    filter();
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
            handleSearch()
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
