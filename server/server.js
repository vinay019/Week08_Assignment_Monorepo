import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 8080;
import { Quotes } from "./variables.js";

app.get("/", function (request, response) {
  response.json(
    "Ouch, you've hit my roots!!! Are you looking for the quotes API? If so, please take the /quotes path. Thank you, Merci, Gracias!"
  );
});

app.get("/quotes", function (request, response) {
  response.json(Quotes);
});

app.listen(PORT, function () {
  console.log(`This server is running on ${PORT}`);
});
