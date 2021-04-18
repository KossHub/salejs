const express = require('express');
const app = express();

app.use(express.static('dist'));
app.get('/products.json', (req, res)=>{
    res.json([
        {id: 1, name: 'qwe', img: 'https://place-hold.it/300&text=qwe', price: 100, desc: 'Fusce ac mi eget justo bibendum hendrerit a vel lorem. Nullam nulla nisi, pretium eget venenatis in, suscipit vel magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'},
        {id: 2, name: 'asd', img: 'https://place-hold.it/300&text=qwe', price: 200, desc: 'Nulla ultrices commodo lacus in porttitor. Sed lacus dui, rhoncus sed felis eu, cursus congue turpis. Cras consequat sem commodo metus pretium, eget efficitur sapien ultrices. Integer feugiat bibendum molestie.'},
    ]);
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
