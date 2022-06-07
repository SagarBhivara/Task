const express = require('express')
const cors = require('cors')
const https = require('https')
const app = express()
const PORT = process.env.PORT || 4000;
const requrl="https://jsonplaceholder.typicode.com/users";


https.get(requrl, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
app.listen(PORT, ()=>{console.log(`The Server is running on port ${PORT}`)})