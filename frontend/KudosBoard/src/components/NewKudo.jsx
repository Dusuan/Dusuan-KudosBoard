import "./styles/NewKudo.css";
import { useState } from "react";
import { postKudos } from "../APIHandler";

const NewKudo = ({ setNewKudoModal, getAllKudoCards, id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await postKudos(formData, id);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key} : ${value}`);
    // }
    getAllKudoCards();
  };

  const setCloseKudoModal = () => {
    setNewKudoModal(false);
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
              id="description"
              name="description"
              placeholder="Description"
            ></input>
            <input
              type="text"
              id="owner"
              name="owner"
              placeholder="Owner"
            ></input>
            <input
              type="text"
              id="gifserach"
              name="gifsearch"
              placeholder="Search Gifs"
            ></input>
            <button>Search</button>
            <input
              type="text"
              id="gifresult"
              name="gifresult"
              placeholder="Enter Gif URL"
            ></input>
            <label>
              {/* Img <input type="file" id="imgfile" name="imgfile"></input> */}
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <button onClick={setCloseKudoModal}>Close</button>
      </div>
    </div>
  );
};
export default NewKudo;
