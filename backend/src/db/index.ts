import { Sequelize } from "sequelize-typescript";
import { CONFIG } from "~/config/config";

const sequelize = new Sequelize(CONFIG.DATABASE_URL, {
  dialect: "postgres",
  models: [__dirname + "/models/*.model.ts"],
  modelMatch: (filename: string, member: string) => {
    return filename.substring(0, filename.indexOf(".model")) === member.toLowerCase();
  },
});

async function DBInit() {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
}

export default DBInit;
