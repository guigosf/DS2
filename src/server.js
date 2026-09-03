const app = require("../http/app")

const port = 3000;

app.listen(port, () => {
  console.log("aplicação iniciada, usando a porta" + port)
})