import './styles/Comment.css'
const Comment = ({ username, text }) => {
  return (
    <div className="Comment">
      <div>
       
      </div>
      <div>
        <div><strong>{username ?  username : "Anonymous" }</strong></div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
