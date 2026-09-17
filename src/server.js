const createApp = require("./app");
const createRepositories = require("./repositories");
const env = require("./config/env")

const app = createApp(createRepositories(env));

app.listen(env.port, () => {
  console.log("API no ar em " + env.baseUrl);
  console.log("Porta: " + env.port);
  console.log("Driver: " + env.driver);
})
