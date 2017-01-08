var express = require('express');
var moment = require('moment');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.all("/:date", function(request, response) {

if(moment(request.params.date, 'LL', true).isValid() == true){
  response.end("Date is: "+request.params.date);
}
else if(moment.unix(request.params.date).isValid() == true){
    response.end("unix timestamp is: "+request.params.date); 
}
else
{
   response.end("No date found!"); 
}
});

// app.get("/about", function(request, response) {
//   response.end("Welcome to the about page!");
// });

app.get("*", function(request, response) {
  response.end("https://polar-tor-97887.herokuapp.com/[INPUT-DATE-OR-UNIX-TIMESTAMP]");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


