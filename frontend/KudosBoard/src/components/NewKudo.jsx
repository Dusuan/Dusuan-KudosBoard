import "./styles/NewKudo.css";
import { useState } from "react";
import { postKudos, getGifs } from "../APIHandler";

const NewKudo = ({ setNewKudoModal, getAllKudoCards, id }) => {
  const [gifVal, setGifVal] = useState("");
  const [selectedGif, setSelectedGif] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSelectGif = (gif) => {
    setSelectedGif(gif);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await postKudos(formData, selectedGif, id);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key} : ${value}`);
    // }
    getAllKudoCards();
  };

  const setCloseKudoModal = () => {
    setNewKudoModal(false);
  };

  const handleGetGifs = async (query) => {
    const gifs = await getGifs(query);
    console.log(gifs);
    setGifs(gifs.data);
  };

  return (
    <div className="NewBoard">
      <div className="NewBoardContent">
        <div className="FormContainer">
          <form className="Form" onSubmit={handleSubmit}>
            <input
              required={true}
              type="text"
              id="title"
              name="title"
              placeholder="Title"
            ></input>
            <input
              required={true}
              type="text"
              id="description"
              name="description"
              placeholder="Description"
            ></input>
            <input
              type="text"
              id="owner"
              name="owner"
              placeholder="Owner (Optional)"
            ></input>
            <input
              type="text"
              id="gifserach"
              name="gifsearch"
              value={gifVal}
              onChange={(e) => setGifVal(e.target.value)}
              placeholder="Search Gifs"
            ></input>
            <button type="button" onClick={() => handleGetGifs(gifVal)}>
              Search
            </button>
            <div className="gifs">
              {gifs.map((gif) => {
                return (
                  <img
                    onClick={() => handleSelectGif(gif.images.original.url)}
                    height={100}
                    width={100}
                    key={gif.url}
                    src={gif.images.original.url}
                  />
                );
              })}
            </div>
            <input
              required={true}
              type="text"
              id="gifresult"
              name="gifresult"
              placeholder="Enter Gif URL"
              value={selectedGif}
              onChange={(e) => setSelectedGif(e.target.value)}
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
