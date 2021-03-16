const express = require('express');
const app = express();

const path = require('path');
const port = 4000;

//SUB APPS
//--------
app.use("/reno", require("./reno/routes"));

//--------
//END SUB APPS


//MAIN APP
//--------
app.get('/', (req, res) => {
  res.send('Heck World');
})

//--------
//END MAIN APP


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})