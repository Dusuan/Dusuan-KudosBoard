import "./styles/KudoBoard.css";
const KudoBoard = ({
  KudoboardId,
  title,
  img,
  author,
  type,
  deleteKudoBoard,
}) => {
  const handleViewKudos = () => {
    console.log(`Viewing Kudos! of: ${KudoboardId}`);
  };
  const handleDeleteBoard = (id) => {
    console.log(`Deleting card with id: ${KudoboardId}`);
    deleteKudoBoard(id);
  };
  return (
    <div className="KudoBoard">
      <div className="">
        <img
          className="card-image"
          width={200}
          height={300}
          src={`${img !== null ? `${img}` : "../../top.webp"}`}
        />
      </div>
      <div>
        <div>
          <p>{title}</p>
        </div>
        <div>{author}</div>
      </div>
      <div className="buttonDiv">
        <button onClick={handleViewKudos}>View items</button>
        <button onClick={() => handleDeleteBoard(KudoboardId)}>Delete board</button>
      </div>
    </div>
  );
};
export default KudoBoard;
