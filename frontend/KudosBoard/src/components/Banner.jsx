import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import './styles/Banner.css'

const Banner = ({ getAllKudoBoards, setKudoBoards, KudoBoards }) => {
  return (
    <div className="Banner">
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
