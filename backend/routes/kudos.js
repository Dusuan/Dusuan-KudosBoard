const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const kudocard = await prisma.kudocard.findUnique({
      where: { KudocardId: parseInt(id) },
    });

    res.send(kudocards);
  } catch (e) {
    res.send("This went wrong :" + e);
  }
});

router.get("/all/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const kudocards = await prisma.kudocard.findMany({
      where: { kudoboardId: parseInt(id) },
    });
    res.send(kudocards);
  } catch (e) {
    res.send("This went wrong :" + e);
  }
});

router.put("/pin/:id", async (req, res) => {
  const { id } = req.params;
  const date = new Date();
  try {
    const pinnedKudo = await prisma.kudocard.update({
      where: { KudocardId: parseInt(id) },
      data: {
        isPinned: true,
        datePinned: date,
      },
    });
    res.send(pinnedKudo);
  } catch (e) {
    res.send("This went wrong :" + e);
  }
});

router.put("/unpin/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const unpinnedKudo = await prisma.kudocard.update({
      where: { KudocardId: parseInt(id) },
      data: {
        isPinned: false,
        datePinned: null,
      },
    });
    res.send(unpinnedKudo);
  } catch (e) {
    res.send("This went wrong :" + e);
  }
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
    res.send("This went wrong :" + e);
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
    res.send("This went wrong :" + e);
  }
});

module.exports = router;
