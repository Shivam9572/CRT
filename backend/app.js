const express = require("express");
const app = express();

app.get("/welcome/:id", (req, res) => {
  
    res.end(`<h1>Welcome ${req.params.id}! you are a ${req.query.role}</h1>`);
  
  
});


app.use((req, res) => {
  res.status(404);
  res.send("<h1>404 - Page Not Found</h1>");
})
app.listen(4000, () => {
  console.log("3000 port is now servering");
})