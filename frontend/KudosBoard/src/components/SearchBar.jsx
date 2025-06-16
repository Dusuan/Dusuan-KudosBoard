const SearchBar = ({handleSearchChange, searchQuery}) => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"Search for a board!"}
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
                console.log(`Searched for ${searchQuery} `)
            }
          }}
        ></input>
      </div>{" "}
    </div>
  );
};
export default SearchBar;
