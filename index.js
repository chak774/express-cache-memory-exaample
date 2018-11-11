const Express = require('express');

let app = Express();

let cache = require('./cache');

let getData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('bar');
        },1000);
    })
}

app.get('/foo', cache.respondCache(), async (req, res)=>{
    console.log(`Can't find cached content...`);
    //do sth IO to get data. Maybe from DB.
    let data = await getData();
    cache.storeCache(req.originalUrl, data);
    res.send(`Can't find cached content.`)
})

app.listen(5000, ()=>{
    console.log(`Server is starting up on port 5000...`);
})