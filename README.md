# express-cache-memory-example
Simple example using cache-memory with Express.js

# How to run? 
GET localhost:5000/foo?param1=val1

# Remark
Cache's key is (req.originalUrl). For example: /foo?param1=val1
If a request can't find cached content, then it needs 1 second to process. <br/>
Cached content timeout config is 10 seconds
