import express from "express";
import Main from "./routes";
import mongoose from "mongoose";
import config from "./config";
import reqLogger from "./middlewares/reqLogger";

const app = express();
const port = config.VARIABLES.PORT;

app.use(express.json());
app.use(reqLogger);
app.use("/api", Main);

mongoose
  .connect(config.VARIABLES.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server "${
          config.APP_NAME
        }" is running on port ${port}... Current version: ${config.VERSION.join(
          "."
        )} 🚀`
      );
    });
  })
  .catch(console.error);
