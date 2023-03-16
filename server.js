const express = require('express');
const path = require("path");
const app = express();
require('dotenv').config();
const port=process.env.SERVER_PORT;
const defaultMessage=process.env.DEFAULT_MESSAGE;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static(path.join(__dirname,"./client/public")));
app.listen(port, () => {
  console.log(`${defaultMessage} on port ${port}`)
});