const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../build'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server Started on Port ${process.env.PORT || 8080}`);
	console.log('Press CTRL + C to stop server');
});