var memCache = require('memory-cache');
 
let respondCache = () => {
    return (req, res, next) => {        
        let key = req.originalUrl;
        console.log(`Key: ${key}`)
        let cachedContent = memCache.get(key);
        if(cachedContent){
            console.log(`Respond with cached content...`);
            res.send(cachedContent);
            return;
        }else{
            console.log(`Can't find any cached content...`);
        }
        next();
    }
}

let storeCache = (key, content) => {
    console.log(`Caching content. Key: ${key}`);
    memCache.put(key, content, 1000*10, (key, val)=>{
        console.log(`Cached content timeout...`);
    });
}
 
module.exports = {respondCache, storeCache};
