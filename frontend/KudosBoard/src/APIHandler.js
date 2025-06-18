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

const fetchBoards = async () => {
  const data = await fetch("http://localhost:9999/kudoboards/")
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
  await fetch(`http://localhost:9999/kudoboards/delete/${id}`, DELETEoptions)
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
  await fetch(`http://localhost:9999/kudoboards/post`, {
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

export { fetchBoards, deleteBoard, postBoard };
