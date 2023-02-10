const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");

const port = process.env.PORT || 5000;

dotenv.config({
  path: "config/config.env",
});

const app = express();
app.use(express.static(path.join(__dirname, "frontend/build")));

console.log(process.env);

app.get("/api/search", async (req, res) => {
  try {
    const search = req.query.search;
    console.log(search);
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API}&cx=${process.env.CX}&q=${search}`;
    const data = await axios.get(url);

    res.json({ data: data.data });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.listen(port, () => {
  console.log(`app is running on the port ${port}`);
});
