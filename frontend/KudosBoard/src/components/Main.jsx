import Dashboard from "./Dashboard";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { fetchBoards} from "../APIHandler.js";

import { useState } from "react";
const Main = ({
  isFormOpen,
  setIsFormOpen,
  setDarkTheme,
  darkTheme
}) => {
  const [KudoBoards, setKudoBoards] = useState([]);
  const getAllKudoBoards = async () => {
    const boards = await fetchBoards();
    setKudoBoards(boards);
  };

  return (
    <>
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Banner
        getAllKudoBoards={getAllKudoBoards}
        setKudoBoards={setKudoBoards}
        KudoBoards={KudoBoards}
      />
      <Dashboard
        isFormOpen={isFormOpen}
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
