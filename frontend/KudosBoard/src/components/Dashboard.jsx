import "./styles/Dashboard.css";
import boards from "../data/data.js";
import KudoBoard from "./KudoBoard.jsx";
import NoBoards from "./NoBoards.jsx";
import NewBoard from "./NewBoard.jsx"
import { useEffect } from "react";
const Dashboard = ({IsFormOpen, setIsFormOpen}) => {
  const handleOnFormOpen = ( ) => {
    setIsFormOpen(true)
  }

  const getAllKudoBoards =() => {
    // add get all here
    console.log("Rendering all kudo boards")
  }

  useEffect(() => {
    getAllKudoBoards()
  }, [])


  return (
    <div className="Dashboard">

      <div>
        <button onClick={handleOnFormOpen}>
          Create new Board
        </button>
      </div>

      {IsFormOpen  ? <NewBoard setIsFormOpen={setIsFormOpen}/> : <></>}

      {boards.length < 1 ? (
        <NoBoards />
      ) : (
        <div className="Boards">
          {boards.map((board) => {
            return (
              <div key={board.id}>
                <KudoBoard {...board} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
