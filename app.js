const express = require('express');
const app = express();

const path = require('path');
const port = 3000;

//SUB APPS
//--------
app.use("/paris", require("./Paris/routes"));
app.use("/boise", require("./Boise/routes"));

//--------
//END SUB APPS


//MAIN APP
//--------
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//--------
//END MAIN APP


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})