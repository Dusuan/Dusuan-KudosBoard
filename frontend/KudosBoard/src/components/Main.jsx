import Dashboard from "./Dashboard";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { fetchBoards} from "../APIHandler.js";

import { useState } from "react";
const Main = ({
  searchQuery,
  handleSearchChange,
  IsFormOpen,
  setIsFormOpen,
  setSearchQuery
}) => {
  const [KudoBoards, setKudoBoards] = useState([]);
  const getAllKudoBoards = async () => {
    const boards = await fetchBoards();
    setKudoBoards(boards);
  };

  return (
    <>
      <Header />
      <Banner
      setSearchQuery={setSearchQuery}
        getAllKudoBoards={getAllKudoBoards}
        setKudoBoards={setKudoBoards}
        KudoBoards={KudoBoards}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <Dashboard
        IsFormOpen={IsFormOpen}
        KudoBoards={KudoBoards}
        getAllKudoBoards={getAllKudoBoards}
        setKudoBoards={setKudoBoards}
        setIsFormOpen={setIsFormOpen}
      />
      <Footer />
    </>
  );
};
export default Main;
