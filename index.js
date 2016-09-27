var express = require('express');
var app = express();

//app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));

// app.get('/anime', function (req, res) {
//   res.sendFile( __dirname + "/public/" + "Anime.html");
// });

app.get('/animeData1', function (req, res) {
  console.log("function1 invoked!!!!!");
   var data1= [{
       "series": "Cowboy Bebop 1",
       "character": "Spike",
       "pic": "http://cdn.paper4pc.com/images/cowboy-bebop-spike-spiegel-wallpaper-2.jpg"
   }, {
       "series": "Cowboy Bebop 2",
       "character": "Spike",
       "pic": "http://static.rogerebert.com/uploads/movie/movie_poster/dont-breathe-2016/large_dont_breathe.jpg"
   }, {
       "series": "Cowboy Bebop 3",
       "character": "Spike",
       "pic": "http://cdn.paper4pc.com/images/cowboy-bebop-spike-spiegel-wallpaper-3.jpg"
   }, {
       "series": "Cowboy Bebop 4",
       "character": "Spike",
       "pic": "http://cdn.paper4pc.com/images/cowboy-bebop-spike-spiegel-wallpaper-1.jpg"
   }]
  res.send(data1);
});

app.get('/animeData2', function (req, res) {
  console.log("function2 invoked....");
  var data2 =  [{
       "series": "Cowboy Bebop 8",
       "character": "Spike",
       "pic": "http://static.rogerebert.com/uploads/movie/movie_poster/dont-breathe-2016/large_dont_breathe.jpg"
   }, {
       "series": "Cowboy Bebop 9",
       "character": "Spike",
       "pic": "http://cdn.paper4pc.com/images/cowboy-bebop-spike-spiegel-wallpaper-2.jpg"
   }, {
       "series": "Cowboy Bebop 10",
       "character": "Spike",
       "pic": "http://cdn.paper4pc.com/images/cowboy-bebop-spike-spiegel-wallpaper-1.jpg"
   }, {
       "series": "Cowboy Bebop 11",
       "character": "Spike",
       "pic": "http://cdn.paper4pc.com/images/cowboy-bebop-spike-spiegel-wallpaper-2.jpg"
   }];
  res.send(data2);
});

app.get('/process_get', function (req, res) {

  // Prepare output in JSON format
  response = {
    first_name:'karthik',
    last_name:'c'
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});
