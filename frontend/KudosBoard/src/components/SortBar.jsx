const SortBar = () => {
  const sortAll = () => {
    console.log("Sorting by all");
  };
  const sortRecent = () => {
    console.log("Sorting by recent");
  };
  const sortCelebration = () => {
    console.log("Sorting by Celebration");
  };
  const sortThankYou = () => {
    console.log("Sorting by Thank you");
  };
  const sortInspiration = () => {
    console.log("Sorting by Inspiration");
  };

  return (
    <div>
      <button onClick={sortAll}>All</button>
      <button onClick={sortRecent}>Recent</button>
      <button onClick={sortCelebration}>Celebration</button>
      <button onClick={sortThankYou}>Thank you</button>
      <button onClick={sortInspiration}>Inspiration</button>
    </div>
  );
};
export default SortBar;
