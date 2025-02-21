import "dotenv/config";

export default {
  APP_NAME: "Todo App",
  VARIABLES: {
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/todo",
    PORT: process.env.PORT || 3000,
  },
  VERSION: require('../package.json').version.split(".") as [number, number, number],
};
