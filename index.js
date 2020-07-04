const express = require('express');
const app = express();
let port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.json({message: 'hello app of me'});
})

let arr = [1, 2, 3, 4];
for(let i = 0; i < arr.length; i++){
    setTimeout(() => console.log(i), 3000);
}
app.listen(port, () => console.log('server on run'));