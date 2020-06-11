//REST API demo in Node.js
import express from 'express'; // require the express framework
var app = express();
import { readFile } from 'fs'; //require file system object

// Endpoint to Get a list of users
app.get('/', function(_req, res){
    readFile(__dirname + "/" + "users.json", 'utf8', function(_err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})
// app.get('/', function (req, res) {
//     res.render('index', {});
//   });
// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})