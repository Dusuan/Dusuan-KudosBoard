import SearchBar from "./SearchBar";
import SortBar from "./SortBar";

const Banner = ({ handleSearchChange, searchQuery, getAllKudoBoards, setKudoBoards, KudoBoards,setSearchQuery }) => {
  return (
    <div>
      <SearchBar
      getAllKudoBoards={getAllKudoBoards}
      KudoBoards={KudoBoards}
      setKudoBoards={setKudoBoards}
      setSearchQuery={setSearchQuery}
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
