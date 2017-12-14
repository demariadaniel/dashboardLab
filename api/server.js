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

app.listen(process.env.API_PORT || 8080, () => {
	console.log(`Server Started on Port ${process.env.API_PORT || 8080}`);
	console.log('Press CTRL + C to stop server');
});

const knex = require('knex')(require('./knexfile'));

  const bookshelf = require('bookshelf')(knex);
  
  const Student = bookshelf.Model.extend({
    tableName: 'student',
})

app.get('/students', (req,res)=>{
    Student
	.fetchAll()
	.then(students => {
        console.log(students)
        res.send(students)
	})
})

app.post('/students', (req,res)=>{
    let newStudent = new Student(req.body)
    console.log(newStudent)

    // Student
	// .save()
	// .then(student => {
    //     console.log(student)
        res.send(student)
	// })
})

app.put('/students', (req,res)=>{
    Student
	.fetchAll()
	.then(students => {
        console.log(students)
        res.send(students)
	})
})

app.del('/students', (req,res)=>{
    Student
	.fetchAll()
	.then(students => {
        console.log(students)
        res.send(students)
	})
})