import "./styles/NewBoard.css";
import { useState } from "react";
import { postBoard } from "../APIHandler.js";

const NewBoard = ({ setIsFormOpen, getAllKudoBoards }) => {
  const IsFormOpenHandler = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = async (e) => {
    // API post logic
    e.preventDefault();
    const formData = new FormData(e.target);
    await postBoard(formData);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key} : ${value}`);
    // }
    getAllKudoBoards();
  };

  return (
    <div className="NewBoard">
      <div className="NewBoardContent">
        <div className="FormContainer">
          <form className="Form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
            ></input>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
            ></input>
            <label>
              {/* Img <input type="file" id="imgfile" name="imgfile"></input> */}
            </label>
            <select name="type" id="type" defaultValue={"Default"}>
              <option value="celebration">Celebration</option>
              <option value="thankyou">Thank you</option>
              <option value="inspiration">Inspiration</option>
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
