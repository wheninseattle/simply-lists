const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const path = require("path");

// Initialize Express
const app = express();

// Use cors
app.use(cors());

// Conenct with database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req,res) => res.json({msg:'Welcome to the Simply Lists API...'}))

// Define API routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/lists", require("./routes/lists"));
app.use("/api/publicLists", require("./routes/publicLists"));
app.use("/api/listItems", require("./routes/listItems"));
app.use("/api/comments", require("./routes/comments"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
