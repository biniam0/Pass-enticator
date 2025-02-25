import express from "express";

const app = express();
const port = 3000;

app.set("views engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
