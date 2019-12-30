const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors())

const contactRepo = require('./repo/contact');
const contactRouter = require('./routes/contact');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/contact',contactRouter);



app.listen(8090, () => {
     console.log('Puerto 8090')
});
