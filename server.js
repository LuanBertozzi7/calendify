import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json()); // ler as req JSON

app.get("/", (req, res) => {
  res.redirect(301, "/login.html");
});


// arquivos dentro de /public
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    // Senha deve ser string
    // gera um token aleatório
    const token = Math.random().toString(36).substring(2);
    return res.json({ token });
  }
  return res.status(401).json({ message: "Usuário ou senha inválido" });
});

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
