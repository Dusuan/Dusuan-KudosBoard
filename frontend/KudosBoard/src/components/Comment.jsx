import './styles/Comment.css'
const Comment = ({ username, text }) => {
  return (
    <div className="Comment">
      <div>
       
      </div>
      <div>
        <div>{username ?  username : "Anonymous" }</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
