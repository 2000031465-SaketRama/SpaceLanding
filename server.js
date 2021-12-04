const express = require("express");
const app = express();

app.get('/', function(request,response){
    response.send('HIIIIII');

});




app.listen(8080, function()
{
    console.log("Server is up at port 8080");
});
