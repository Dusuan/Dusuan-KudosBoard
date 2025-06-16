import "./styles/NewBoard.css";
import { useState } from "react";

const NewBoard = ({ setIsFormOpen }) => {
  const IsFormOpenHandler = () => {
    setIsFormOpen(false);
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    type: 0,
  });

  const handleSubmit = (e) => {
    // API post logic
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      console.log(`${key} : ${value}`);
    }
  };

  return (
    <div className="NewBoard">
      <div className="NewBoardContent">
        <div className="FormContainer">
          <form className="Form" onSubmit={handleSubmit}>
            <label>
              Title <input type="text" id="title" name="title"></input>
            </label>
            <label>
              Description
              <input type="text" id="description" name="description"></input>
            </label>
            <label>
              Author
              <input type="text" id="author" name="author"></input>
            </label>
            <label>
              Img <input type="file" id="imgfile" name="imgfile"></input>
            </label>
            <select name="type" id="type" defaultValue={"Default"}>
              <option value="default">Default</option>
              <option value="1">1</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
        <button onClick={IsFormOpenHandler}>Close</button>
      </div>
    </div>
  );
};
export default NewBoard;
