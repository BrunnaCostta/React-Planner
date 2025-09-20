import express from "express";

import { PrismaClient } from "../src/generated/prisma/index.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/register", async (req, resp) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(200).json({ message: "Usuário criado com sucesso" }, req.body);
});

// 1 - tipo de rota/método http
// 2 - endereço

app.listen(5173);

app.get("/usuario", async (req, resp) => {
  let users = [];

  if (req.query.name) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  resp.status(200).json(users);
});

app.put("/usuario/:id", async (req, resp) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  console.log(req);
  resp.status(201).json(req.body);
});

app.delete("/usuario/:id", async (req, resp) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  resp.status(200).json({ message: "Usuário deletado com suceso" });
});
