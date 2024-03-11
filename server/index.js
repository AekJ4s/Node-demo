const express=require('express');
const app=express();
const port=8000;

app.get('/', (req, res) => {
    response.send(`
    <!doctype html>
    <html>
    <head><title>Express.js</title></head>
    <body>
        <h3>Express.js</h3>
        <b> Express.js Fast ,unopinionated ,mininalist ...</b>
    </body>
    </html>
    `)
})
app.listen(port, ()=> console.log('Server listening on port' + port))