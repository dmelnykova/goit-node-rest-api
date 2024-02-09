const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const contactsRouter = require("./routes/contactsRouter/contactsRouter.js");
const usersRouter = require("./routes/usersRouter/usersRouter.js")

const { DB_HOST } = process.env;

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/users", usersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .then(() =>
    app.listen(3000, () => {
      console.log("Server is running. Use our API on port: 3000");
    })
  )
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });