const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const kudocards = prisma.kudocard.findMany({
    where: { kudoboardId: parseInt(id) },
  });
  res.send(kudocards);
});

router.post("/post/:id", async (req, res) => {
  const { title, creator, media, description } = req.body;
  const { id } = req.params;
  try {
    const kudoCard = await prisma.kudocard.create({
      data: {
        title,
        creator,
        media,
        description,
        upvotes: 0,
        isPinned: false,
        kudoboardId: parseInt(id),
      },
    });
    res.send(kudoCard);
  } catch (e) {
    res.send("Something went wrong ");
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedkudocard = await prisma.kudocard.delete({
      where: { KudocardId: parseInt(id) },
    });
    res.send(deletedkudocard);
  } catch (e) {
    res.send("Something went wrong ");
  }
});

module.exports = router;
