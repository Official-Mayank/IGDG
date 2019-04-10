var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.get('/igdg',async (req,res,next)=>{
    let pro_time = "Mayank aaloo hai"
    
    res.send(pro_time);
});


app.get('/return/:data',async (req,res,next)=>{
    let {data} = req.params
    
    let pro = `This is return valute to server: `+data;
    res.send(pro);
});
app.use('/', express.static(__dirname + '/'));
app.listen(process.env.PORT);

