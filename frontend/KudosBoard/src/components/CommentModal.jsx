import Comment from "./Comment";
import "./styles/CommentModal.css";
import { useState, useEffect } from "react";
import { fetchComments, postComment } from "../APIHandler";
const CommentModal = ({ setOpenCommentModal, title, creator, media, id }) => {
  const [comments, setComments] = useState([]);

  const handleFetchComments = async (id) => {
    const comments = await fetchComments(id);
    setComments(comments);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await postComment(formData, id);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key} : ${value}`);
    // }
    handleFetchComments(id);
  };

  const handleModalClose = () => {
    setOpenCommentModal(false);
  };

  useEffect(() => {
    handleFetchComments(id);
  }, []);

  return (
    <div className="CommentModal">
      <div className="CommentModalContent">
        <div>
          <div>{title}</div>
          <div>{creator}</div>
          <img src={media} height={300} width={300}></img>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              required={true}
              type="text"
              id="comment"
              name="comment"
              placeholder="Write a comment!"
            ></input>
            <input
              required={false}
              type="text"
              id="author"
              name="author"
              placeholder="Creator (optional) "
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.KudocommentId}>
                <Comment {...comment} />
              </div>
            );
          })}
        </div>
        <button onClick={handleModalClose}>Close</button>
      </div>
    </div>
  );
};

export default CommentModal;
