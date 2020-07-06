const express = require('express');
const app = express();
let port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.json({message: 'hello app of me'});
})

app.get('/admin', (req, res) => {
    res.json({
        message: 'Hello to admin',
        username: 'username',
        password: 'password'
    })
});        
app.get('/new', (req, res) => {
    res.json({
        message: 'new',
        date: new Date().toLocaleString()
    })
})
app.listen(port, () => console.log('server on run'));