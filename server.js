const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    response.send("Hello Express");
});

app.listen(8000, () => console.log("listening on port 8000"));