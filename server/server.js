const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

const toDoRouter = require('./routes/toDo_router.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/toDo', toDoRouter);

app.listen(port, () => {
    console.log("up and running on port: ", port);
});