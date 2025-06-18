import './styles/BoardPage.css'
import Header from "./Header";
import Footer from "./Footer";
import KudoCard from "./KudoCard";
import { useParams } from "react-router-dom";
import { fetchKudos } from "../APIHandler";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { deleteKudos } from "../APIHandler";


const BoardPage = () => {
  const { id } = useParams();
  const [kudos, setKudos] = useState([]);

  const getAllKudoCards = async () => {
    const kudos = await fetchKudos(id);
    setKudos(kudos);
  };

const handleDeleteKudo = async (id) =>{ 
    // const filteredBoards = KudoBoards.filter((board) => board.KudoboardId !== id)
    // setKudoBoards(filteredBoards)
    // deleteBoard(id)

    const filteredKudos = kudos.filter((kudo) => kudo.KudocardId !== id)
    setKudos(filteredKudos)
    deleteKudos(id)
  }


  useEffect(() => {
    getAllKudoCards();
  }, []);

  return (
    <>
    
      <Header />

        <div>
            <button><Link to="/">Get back</Link></button>
        </div>

      {/* {IsFormOpen  ? <NewBoard setIsFormOpen={setIsFormOpen}  getAllKudoBoards={getAllKudoBoards} /> : <></>} */}


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
    </>
  );
};

export default BoardPage;
