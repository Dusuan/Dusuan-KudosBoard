const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const app = express()

// GETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGETGET

// get all boards
router.get("/", async (req, res) => {
  const boards = await prisma.kudoboard.findMany();
  res.json(boards);
});

// POSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOSTPOST

router.post("/post", async ( req, res ) => {
  console.log(req.body)
  const {title, author, type, img} = req.body
  const result = await prisma.kudoboard.create({
      data: {
          title,
          author,
          type,
          img
      },
  })
  res.json(req.body);
});

//PUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUTPUT

//DELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETEDELETE

module.exports = router;
