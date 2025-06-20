import "./styles/KudoBoard.css";
import { Link } from "react-router-dom";
const KudoBoard = ({
  KudoboardId,
  title,
  img,
  author,
  type,
  deleteKudoBoard,
}) => {
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
        <div>{type}</div>
      </div>
      <div className="buttonDiv">
        <button>
          <Link to={`/board/${KudoboardId}`}>View Items</Link>
        </button>
        <button onClick={() => handleDeleteBoard(KudoboardId)}>
          Delete board
        </button>
      </div>
    </div>
  );
};
export default KudoBoard;
