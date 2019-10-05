const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/authRouter.js");

const server = express();

server.use(logger);
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter); // <<<< can add middlware

server.get("/", (req, res) => {
  res.json({ message: "This one's for IAN" });
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      "host"
    )}`
  );
  next();
}

module.exports = server;
