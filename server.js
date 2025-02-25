import express from "express";
import bodyParser from "body-parser";
import bcrypt, { hashSync } from "bcrypt";

const app = express();
const port = 3000;

const users = [];

app.set("views engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/register", (req, res) => {
  try {
    const hashedPassword = bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login")
  } catch (error) {
    console.error(error);    
  }
});

app.post("/login", (req, res) => {
    
})

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
