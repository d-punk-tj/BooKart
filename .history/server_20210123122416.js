const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const cors = require('cors');  
const path = require('path');



const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.set('port', process.env.port || port); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

 

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
