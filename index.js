import mongoose from "mongoose";
import { config } from "dotenv";
import app from "./app/index.js";

config();

const { PORT, URI_DB } = process.env;

mongoose
  .connect(URI_DB)
  .then(() => {
    console.info("db server connected");
    app.listen(PORT, () => {
      console.info("server listened on port " + PORT);
    });
  })
  .catch((err) => {
    console.error(err);
  });
