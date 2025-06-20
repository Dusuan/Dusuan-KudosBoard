import "./styles/BoardPage.css";
import Header from "./Header";
import Footer from "./Footer";
import KudoCard from "./KudoCard";
import { useParams } from "react-router-dom";
import { fetchKudos } from "../APIHandler";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteKudos } from "../APIHandler";

import NewKudo from "./NewKudo";

const BoardPage = () => {
  const [NewKudoModal, setNewKudoModal] = useState(false);
  const { id } = useParams();
  const [kudos, setKudos] = useState([]);

  const handleOpenKudoModal = () => {
    setNewKudoModal(true)
  }

  const getAllKudoCards = async () => {
    const kudos = await fetchKudos(id);
    setKudos(kudos);
  };


  const handleDeleteKudo = async (id) => {
    // const filteredBoards = KudoBoards.filter((board) => board.KudoboardId !== id)
    // setKudoBoards(filteredBoards)
    // deleteBoard(id)

    const filteredKudos = kudos.filter((kudo) => kudo.KudocardId !== id);
    setKudos(filteredKudos);
    deleteKudos(id);
  };

  useEffect(() => {
    getAllKudoCards();
  }, []);

  return (
    <div>
      <Header />

      <div>
        <button>
          <Link to="/">Get back</Link>
        </button>
      </div>

      <div>
        <button onClick={handleOpenKudoModal}>Create new card</button>
      </div>

      {NewKudoModal ? <NewKudo setNewKudoModal={setNewKudoModal} getAllKudoCards={getAllKudoCards} id={id}/>  : <></>}

      {kudos.length < 1 ? (
        <h1>No cards available</h1>
      ) : (
        <div className="Kudos">
          {kudos.map((kudo) => {
            return (
              <div key={kudo.KudocardId}>
                <KudoCard {...kudo} handleDeleteKudo={handleDeleteKudo} />
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default BoardPage;
