import SearchBar from "./SearchBar";
import SortBar from "./SortBar";

const Banner = ({ getAllKudoBoards, setKudoBoards, KudoBoards }) => {
  return (
    <div>
      <SearchBar
        getAllKudoBoards={getAllKudoBoards}
        KudoBoards={KudoBoards}
        setKudoBoards={setKudoBoards}
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
