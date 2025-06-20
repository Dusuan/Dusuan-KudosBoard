import "./styles/Dashboard.css";
import boards from "../data/data.js";
import KudoBoard from "./KudoBoard.jsx";
import NoBoards from "./NoBoards.jsx";
import NewBoard from "./NewBoard.jsx"
import { useEffect , useState} from "react";

import {deleteBoard} from "../APIHandler.js";

const Dashboard = ({IsFormOpen, setIsFormOpen, KudoBoards, setKudoBoards, getAllKudoBoards}) => {


  const handleOnFormOpen = ( ) => {
    setIsFormOpen(true)
  }

  
  const deleteKudoBoard = async (id) =>{ 
    const filteredBoards = KudoBoards.filter((board) => board.KudoboardId !== id)
    setKudoBoards(filteredBoards)
    deleteBoard(id)
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

      {IsFormOpen  ? <NewBoard setIsFormOpen={setIsFormOpen}  getAllKudoBoards={getAllKudoBoards} /> : <></>}

      {KudoBoards.length < 1 ? (
        <NoBoards />
      ) : (
        <div className="Boards">
          {KudoBoards.map((board) => {
            return (
              <div key={board.KudoboardId}>
                <KudoBoard {...board} deleteKudoBoard={deleteKudoBoard} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
