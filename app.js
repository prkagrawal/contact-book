require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// Connect Database
const connectDb = require("./config/MongoDb");
connectDb();

// use middlewares
app.use(cors());
app.use(express.json({ extended: false }));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the ContactKeeper API..." });
});

// Define Routes
app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
