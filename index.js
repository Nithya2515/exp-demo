const express = require('express');
const app = express();

app.use(express.json());


const persons = [
    { id: 1, name: 'name1', age: 20 },
    { id: 2, name: 'name2', age: 25 },
    { id: 3, name: 'name3', age: 30 },
    ];

app.get('/', (req, res) => {
    res.send('Hi Nithya hello');
});

app.get('/api/persons', (req, res) => {
    res.send(persons);
});

app.post('/api/persons', (req, res) =>{
    const person = {
        id: persons.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    persons.push(person);
    // res.send(person);
    res.redirect('/api/persons');
});



app.get('/api/persons/:id', (req, res) => {
    const person = persons.find(c => c.id === parseInt(req.params.id));
    if (!person) res.status(404).send('the person with given ID was not found');
    res.send(person);
});

// app.get('/api/date/:year/:month/:day', (req, res) => {
//     res.send(req.params);
// });
// app.get('/api/date/:year/:month/:day', (req, res) => {
//     res.send(req.query);
// });


//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}....`));

