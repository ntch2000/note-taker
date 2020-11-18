// 1. require express package
const express = require("express");
const path = require("path");

// 2. create instance of express
const app = express();

// 3. set listen PORT
const PORT = process.env.PORT || 3000;

// 5. add middleware code
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// code to serve static files to html
app.use(express.static(path.join(__dirname, "public")));

// 4. listen on  PORT
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});

require("./routes/apiRoutes")(app);
require("./routes/viewsRoutes")(app);
