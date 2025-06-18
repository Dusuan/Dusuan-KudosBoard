import "./styles/KudoCard.css";
const KudoCard = ({
  KudocardId,
  title,
  description,
  creator,
  upvotes,
  media,
  isPinned,
  datePinned,
  handleDeleteKudo
}) => {
  const handleDeleteCard = (id) => {
    console.log(`kudo with id: ${id} deleted`)
    handleDeleteKudo(id)
  };

  return (
    <div className="KudoCard">
      <div className="">
        <img
          className="card-image"
          width={200}
          height={300}
          src={`${media !== null ? `${media}` : "../../top.webp"}`}
        />
      </div>
      <div>
        <div>{KudocardId}</div>
        <div>
          <p>{title}</p>
        </div>
        <div>{creator}</div>
      </div>
      <div className="buttonDiv">
        <button>Upvote : {upvotes}</button>
        <button onClick={() => handleDeleteCard(KudocardId)}>
          Delete card
        </button>
      </div>
    </div>
  );
};
export default KudoCard;
