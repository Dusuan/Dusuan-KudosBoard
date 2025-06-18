const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// get all boards
router.get("/", async (req, res) => {
  try {
    const boards = await prisma.kudoboard.findMany();
    res.status(201).json(boards);
  } catch (e) {
    res.send("this happened" + e);
  }
});

//

router.post("/post", async (req, res) => {
  const { title, author, type } = req.body;
  try {
    const kudoboard = await prisma.kudoboard.create({
      data: {
        title,
        author,
        type,
        img: "https://picsum.photos/200/300",
      },
    });
    res.json(kudoboard);
  } catch (e) {
    res.send("this happened" + e);
  }
});

//



router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBoard = await prisma.kudoboard.delete({
      where: { KudoboardId: parseInt(id) },
    });

    res.json(deletedBoard);
  } catch (e) {
    res.send("Could not delete/wasn't found log: " + e);
  }
});

module.exports = router;
