import { fetchBoards } from "../APIHandler.js";

const SortBar = ({getAllKudoBoards, setKudoBoards, KudoBoards}) => {
  const sort = async (sortType) => {
    let filteredBoards = await fetchBoards();

    if (sortType === "recent") {
      filteredBoards.sort(function (a, b) {
        const one = new Date(a.dateCreated)
        const two = new Date(b.dateCreated)
        return two - one;
      });
      filteredBoards = filteredBoards.slice(0, 6)
    } else if (sortType === "celebration") {
      filteredBoards = filteredBoards.filter((board) => board.type === "celebration");
    } else if (sortType === "thankyou") {
      filteredBoards = filteredBoards.filter((board) => board.type === "thankyou");
    } else if (sortType === "inspiration") {
      filteredBoards = filteredBoards.filter((board) => board.type === "inspiration");
    }
    setKudoBoards(filteredBoards);
  };

  return (
    <div>
      <button onClick={() => sort("all")}>All</button>
      <button onClick={() => sort("recent")}>Recent</button>
      <button onClick={() => sort("celebration")}>Celebration</button>
      <button onClick={() => sort("thankyou")}>Thank you</button>
      <button onClick={() => sort("inspiration")}>Inspiration</button>
    </div>
  );
};

export default SortBar;
