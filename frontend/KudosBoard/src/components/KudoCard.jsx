import "./styles/KudoCard.css";
import { useState } from "react";
import { upVote, pinKudo, unPinKudo } from "../APIHandler";
const KudoCard = ({
  KudocardId,
  title,
  description,
  creator,
  upvotes,
  media,
  isPinned,
  datePinned,
  handleDeleteKudo,
  handleOpenCommentModal,
  setKudoInfo,
  getAllKudoCards
}) => {
  const [UpVotes, setUpvotes] = useState(upvotes);
  const [localPin, setLocalPin] = useState(isPinned)
  const handleDeleteCard = (id) => {
    console.log(`kudo with id: ${id} deleted`);
    handleDeleteKudo(id);
  };

  const handleOnPin = async (id) => {
    setLocalPin((prev) => !prev)
    if (isPinned) {
      await unPinKudo(id);
    } else {
     await  pinKudo(id);
    }
    getAllKudoCards()
  };

  const handleSetKudoInfo = () => [
    setKudoInfo({
      title: title,
      creator: creator,
      media: media,
      id: KudocardId,
    }),
  ];

  const handleOnUpvote = () => {
    const more = UpVotes + 1;
    setUpvotes(more);
    upVote(more, KudocardId);
  };
  // useEffect(() => {

  // }, [])

  return (
    <div className="KudoCard">
      <div className="">
        <img
          className="card-image"
          width={200}
          height={300}
          src={`${media !== null ? media : "/public/top.webp"}`}
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
        <button onClick={() => handleOnPin(KudocardId)} style={{borderColor : localPin ? 'gold' : 'teal' , borderWidth : 2}}>{localPin ? "Unpin" : "Pin"}</button>
        <button onClick={handleOnUpvote}>Upvote : {UpVotes}</button>
        <button onClick={() => handleDeleteCard(KudocardId)}>
          Delete card
        </button>
        <button
          onClick={() => {
            handleOpenCommentModal();
            handleSetKudoInfo();
          }}
        >
          Comments
        </button>
      </div>
    </div>
  );
};
export default KudoCard;
