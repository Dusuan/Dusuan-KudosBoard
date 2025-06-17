import './styles/SearchBar.css'

const SearchBar = ({ handleSearchChange, searchQuery }) => {
  const handleSearch = () =>{

  }
  const handleClear = () => {

  }
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
            console.log(`Searched for ${searchQuery} `);
          }
        }}
      ></input>
      <button className="searchBtn" onClick={handleSearch}>Search</button>
      <button className= "searchBtn"onClick={handleClear}>Clear</button>
    </div>
  );
};
export default SearchBar;
