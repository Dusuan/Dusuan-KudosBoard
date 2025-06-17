const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();


// get all boards
router.get("/", async (req, res) => {
  const boards = await prisma.kudoboard.findMany();
  res.json(boards);
});

// 

router.post("/post", async (req, res) => {
  const { title, author, type, img } = req.body;
  try {
    const kudoboard = await prisma.kudoboard.create({
      data: {
        title,
        author,
        type,
        img : "https://picsum.photos/200/300",
      },
    });
    res.json(kudoboard);
  } catch (e) {
    res.send("something wrong happened");
  }
});

//

//

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBoard = await prisma.kudoboard.delete({
      where: { KudoboardId: parseInt(id) },
    });

    res.json(deletedBoard);
  } catch (e) {
    res.send("Could not delete/wasn't found");
  }
});

module.exports = router;
