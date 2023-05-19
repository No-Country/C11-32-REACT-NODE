import "dotenv/config";
import express from "express";
import cors from "cors";
import { CONFIG } from "./config/config";
import routerApi from "./routes";
import sequelize, { syncDB } from "./libs/sequelize";
const { PORT } = CONFIG;

sequelize
  .authenticate({ logging: false })
  .then(() => {
    console.info("Database is connected");
    syncDB()
      .then(() => {
        console.info("Database is synced");
      })
      .catch((err) => {
        console.error("Unable to sync the database:", err);
      });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();
app.use(express.json());
app.use(cors());

routerApi(app);

app.listen(PORT, () => {
  console.log("Servidor en http://localhost:" + PORT);
});
