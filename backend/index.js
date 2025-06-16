const express = requie('express')
const app = express()
const PORT = 3000


app.listen(PORT, () => {
    console.log(`Api woking on ${PORT}`)
})

// GET --------------------------------------------------------------------------------
// get all boards
app.get("dashboard/boards", (req,res) => {

})
//get specific board
app.get("dashboard/board/:boardId", () => {

})
//get board specific board posts
app.get("dashboard/board/:boardId/kudos", () => {

})
// search boards by query
app.get("dashboard/board/:query", ()=>{
})

// POST --------------------------------------------------------------------------------


// PUT --------------------------------------------------------------------------------


// DELETE --------------------------------------------------------------------------------

app.delete("/board/")