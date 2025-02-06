import "dotenv/config";

export default {
  APP_NAME: "Todo App",
  VARIABLES: {
    MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/todo",
    PORT: process.env.PORT || 3000,
  },
  VERSION: [1, 0, 0],
};
