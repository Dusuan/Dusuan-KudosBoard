import SearchBar from "./SearchBar";
import SortBar from "./SortBar";

const Banner = ({ handleSearchChange, searchQuery, getAllKudoBoards, setKudoBoards, KudoBoards }) => {
  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <SortBar
        getAllKudoBoards={getAllKudoBoards}
        setKudoBoards={setKudoBoards}
        KudoBoards={KudoBoards}
      />
    </div>
  );
};

export default Banner;
