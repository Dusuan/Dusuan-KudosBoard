const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

router.get("/all/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const kudocomments = await prisma.kudocomment.findMany({
      where: { kudocardKudocardId: parseInt(id) },
    });
    res.send(kudocomments);
  } catch (e) {
    res.send("This went wrong :" + e);
  }
});

router.post("/post/:id", async (req, res) => {
  const { text, username } = req.body;
  const { id } = req.params
  try {
    const kudoboard = await prisma.kudocomment.create({
      data: { text: text, username: username, kudocardKudocardId: parseInt(id) },
    });
    res.json(kudoboard);
  } catch (e) {
    res.send("this happened" + e);
  }
});

module.exports = router;
