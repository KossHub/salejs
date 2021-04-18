const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;

let db, db_products;
const mongoClient = new MongoClient("mongodb://localhost:27017/", {useUnifiedTopology: true});
mongoClient.connect(async function(err, client){
    if (err) {
        return console.log(err);
    }
    db = client.db('salejs');
    db_products = db.collection('products');
    let products = await db_products.countDocuments();
    if (!products)
    {
        db_products.insertMany([
            {name: 'qwe', img: 'https://place-hold.it/300&text=qwe', price: 100, desc: 'Fusce ac mi eget justo bibendum hendrerit a vel lorem. Nullam nulla nisi, pretium eget venenatis in, suscipit vel magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.'},
            {name: 'asd', img: 'https://place-hold.it/300&text=qwe', price: 200, desc: 'Nulla ultrices commodo lacus in porttitor. Sed lacus dui, rhoncus sed felis eu, cursus congue turpis. Cras consequat sem commodo metus pretium, eget efficitur sapien ultrices. Integer feugiat bibendum molestie.'},
        ]);
    }
    // TODO: where to put?
    // client.close();
});

app.use(express.static('dist'));
app.get('/products.json', async (req, res)=>{
    let list = [], cur = db_products.find();
    while (await cur.hasNext()) {
        list.push(await cur.next());
    }
    res.json(list);
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
