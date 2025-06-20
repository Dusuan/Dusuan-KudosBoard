const GEToptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
const DELETEoptions = {
  method: "DELETE",
  headers: {
    accept: "application/json",
  },
};

const url = import.meta.env.VITE_URL;
const GKEY = import.meta.env.VITE_GIPHY;

const fetchBoards = async () => {
  const data = await fetch(`${url}/kudoboards/`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Http error, status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
    });

  return data;
};

const deleteBoard = async (id) => {
  console.log("executed");
  await fetch(`${url}/kudoboards/delete/${id}`, DELETEoptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Http error, status: ${response.status}`);
      }
      console.log(response);
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
    });
};

const postBoard = async (data) => {
  console.log("executed");
  await fetch(`${url}/kudoboards/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.get("title"),
      author: data.get("author"),
      type: data.get("type"),
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Http error, status: ${response.status}`);
      }
      console.log(response);
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
    });
};

const fetchKudos = async (id) => {
  const data = await fetch(`${url}/kudos/all/${id}`, GEToptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Http error, status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
    });
  return data;
};

const deleteKudos = async (id) => {
  console.log("executed");
  await fetch(`${url}/kudos/delete/${id}`, DELETEoptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Http error, status: ${response.status}`);
      }
      console.log(response);
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
    });
};

const postKudos = async (data, gifVal, id) => {
  await fetch(`${url}/kudos/post/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.get("title"),
      creator: data.get("owner"),
      media: gifVal,
      description: data.get("description"),
      upvotes: 0,
      isPinned: false,
    }),
  });
};

const getGifs = async (query) => {
  const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${GKEY}&q=${query}&offset=0&limit=6`, GEToptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Http error, status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching boards:", error);
    });
  return data;
};

export {
  fetchBoards,
  deleteBoard,
  postBoard,
  fetchKudos,
  deleteKudos,
  postKudos,
  getGifs,
};
