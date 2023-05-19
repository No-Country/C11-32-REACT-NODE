import { Sequelize } from "sequelize-typescript";
import { CONFIG } from "~/config/config";

function getModelMatch(filename: string, member: string) {
  return filename.substring(0, filename.indexOf(".model")) === member.toLowerCase();
}

const sequelize = new Sequelize(CONFIG.DATABASE_URL, {
  dialect: "postgres",
  timezone: "-04:00",
  models: [__dirname + "db/models"],
  modelMatch: getModelMatch,
});

export const syncDB = async (): Promise<void> => {
  if (CONFIG.IsProduction()) {
    await sequelize.sync({ logging: false });
  } else {
    await sequelize.sync({ force: true, logging: false });
  }
};

export default sequelize;
