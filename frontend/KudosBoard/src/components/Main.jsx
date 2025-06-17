import Dashboard from "./Dashboard";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
const Main = ({searchQuery, handleSearchChange, IsFormOpen, setIsFormOpen}) => {
  return (
    <>
      <Header />
      <Banner
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <Dashboard IsFormOpen={IsFormOpen} setIsFormOpen={setIsFormOpen} />
      <Footer />
    </>
  );
};
export default Main;
