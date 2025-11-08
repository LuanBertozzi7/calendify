import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = env.PORT || 3000;

app.use(express.json()); // ler as req JSON

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === 123) {
    // gera um token aleatório
    const token = Math.random().toString(36).substring(2);
    return res.json({ token });
  }
  return res.status(401).json({ message: "Usuário ou senha inválido" });
});

app.listen(PORT, () => {
  console.log(`server is runing: http://localhost:${PORT}`);
});
