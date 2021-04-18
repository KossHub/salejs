const express = require('express');
const app = express();

app.use(express.static('dist'));
app.get('/products.json', (req, res)=>{
    res.json([{id: 1, name: 'qwe'}, {id: 2, name: 'asd'}]);
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
