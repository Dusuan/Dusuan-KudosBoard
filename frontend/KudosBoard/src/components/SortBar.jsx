const SortBar = () => {
  const sort = (sortType) => {


  };
  
  return (
    <div>
      <button onClick={sort("all")}>All</button>
      <button onClick={sort("recent")}>Recent</button>
      <button onClick={sort("celebration")}>Celebration</button>
      <button onClick={sort("thankyou")}>Thank you</button>
      <button onClick={sort("inspiration")}>Inspiration</button>
    </div>
  );
};
export default SortBar;
