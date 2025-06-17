import "./styles/KudoBoard.css";
const KudoBoard = ({id, name, description, image, author}) => {
  const handleViewKudos = () => {
    console.log(`Viewing Kudos! of: ${id}`)
  }
  const handleDeleteBoard = () => {
    console.log(`Deleting card with id: ${id}`)
  }
  return (
    <div className="KudoBoard">
      <div className="">
        <img className="card-image" width={200} height={300} src={`${image !== null ? `${image}` : "../../top.webp"}`} />
      </div>
      <div>
        <div>
          <p>{name}</p>
        </div>
        <div>{description}</div>
        <div>{author}</div>
      </div>
      <div>
      <button onClick={handleViewKudos}>
        View items
      </button>
      <button onClick={handleDeleteBoard}>
        Delete board
      </button>
      </div>
    </div>
  );
};
export default KudoBoard;
