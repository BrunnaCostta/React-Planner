import express from "express";
import { PrismaClient } from "./src/generated/prisma/index.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5175", // ou "*" para liberar todas origens (não recomendado em produção)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.post("/register", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
  });
  res
    .status(201)
    .json({ message: "Usuário criado com sucesso", data: req.body });
});

app.get("/usuario", async (req, res) => {
  try {
    const { email, name, password } = req.query;

    const filter = {};
    if (email) filter.email = email;
    if (name) filter.name = name;
    if (password) filter.password = password;

    const users = await prisma.user.findMany({
      where: filter,
    });

    res.status(200).json({ message: "Usuários encontrados", data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
});

// 1 - tipo de rota/método http
// 2 - endereço

// app.listen(5173);
const PORT = process.env.PORT || 5000; // Use 5000 ou qualquer outra porta livre
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

// app.get("/usuario", async (req, resp) => {
//   let users = [];

//   if (req.query.name) {
//     users = await prisma.user.findMany({
//       where: {
//         name: req.query.name,
//         email: req.query.email,
//         age: req.query.age,
//       },
//     });
//   } else {
//     users = await prisma.user.findMany();
//   }

//   resp.status(200).json(users);
// });

// app.put("/usuario/:id", async (req, resp) => {
//   await prisma.user.update({
//     where: {
//       id: req.params.id,
//     },
//     data: {
//       email: req.body.email,
//       name: req.body.name,
//       age: req.body.age,
//     },
//   });
//   console.log(req);
//   resp.status(201).json(req.body);
// });

// app.delete("/usuario/:id", async (req, resp) => {
//   await prisma.user.delete({
//     where: {
//       id: req.params.id,
//     },
//   });

//   resp.status(200).json({ message: "Usuário deletado com suceso" });
// });
