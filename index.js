var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('util');
var MeshMiddleware = require('@smc/mesh_middleware');
var path = require('path');

//app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser());

var data1 = [{
  "id": "1",
  "series": "Cowboy Bebop",
  "character": "Spike",
  "pic": "http://cdn.paper4pc.com/images/cowboy-bebop-spike-spiegel-wallpaper-2.jpg"
}, {
  "id": "2",
  "series": "Ghost In The Shell",
  "character": "motoko",
  "pic": "http://www.theactionpixel.com/wp-content/uploads/2015/10/gitsthenewmovie_3.jpg"
}, {
  "id": "3",
  "series": "Elfen Lied",
  "character": "lucy",
  "pic": "http://vignette3.wikia.nocookie.net/villains/images/3/31/Elfen_Lied_Lucy_by_D_jien.jpg/revision/latest?cb=20130726052703"
}, {
  "id": "4",
  "series": "Full Metal Alchemist Brotherhood",
  "character": "alphonse",
  "pic": "http://www.gstatic.com/tv/thumb/tvbanners/9065115/p9065115_b_v8_aa.jpg"
}, {
  "id": "5",
  "series": "Monokie Hime",
  "character": "monokie",
  "pic": "http://hivewallpaper.com/wallpaper/2014/11/mononoke-hime-anime-21-desktop-background.jpg"
}, {
  "id": "6",
  "series": "Grave Of The Fire Flies",
  "character": "Seta",
  "pic": "http://t0.gstatic.com/images?q=tbn:ANd9GcRMNDBwPmSBW9t9IyC9Xh7Izu_gzmz9_pjalzUcF-tUhmACDPR3"
}, {
  "id": "7",
  "series": "Spirited Away",
  "character": "z",
  "pic": "http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc"
}, {
  "id": "8",
  "series": "Ghost In The Shell SIC",
  "character": "Hideo Kuze",
  "pic": "http://4.bp.blogspot.com/-eXMATdehSdY/UCybsOll1BI/AAAAAAAAAGA/QS8Yh80lu6c/s1600/hideokuze_com_008.jpg"
}, {
  "id": "9",
  "series": "The wind rises",
  "character": "jiro",
  "pic": "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg"
}, {
  "id": "10",
  "series": "Porco Rosso",
  "character": "Proco",
  "pic": "https://upload.wikimedia.org/wikipedia/en/d/d9/Porco_rosso.jpg"
}, {
  "id": "11",
  "series": "nausicaa",
  "character": "nausicaa",
  "pic": "https://upload.wikimedia.org/wikipedia/en/b/bc/Nausicaaposter.jpg"
}, {
  "id": "12",
  "series": "The Girl Who Leapt Through Time",
  "character": "The Girl Who Leapt Through Time",
  "pic": "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Girl_Who_Leapt_Through_Time_poster.jpg"
}, {
  "id": "13",
  "series": "Ninja Scroll",
  "character": "Ninja Scroll",
  "pic": "http://vignette1.wikia.nocookie.net/ninjascroll/images/3/39/Ninja_Scroll_-_Kagero.jpg/revision/latest?cb=20150723194608"
}, {
  "id": "14",
  "series": "The Castle of Cagliostro",
  "character": "The Castle of Cagliostro",
  "pic": "http://vignette1.wikia.nocookie.net/lupin/images/4/44/Castle-cagliostro-poster.jpg/revision/latest?cb=20151113031340"
}, {
  "id": "15",
  "series": "Blood: The Last Vampire",
  "character": "Blood: The Last Vampire",
  "pic": "http://www.filmtakeout.com/wp-content/uploads/2016/02/blood-the-last-vampire-1.jpg"
}, {
  "id": "16",
  "series": "Vampire Hunter D: Bloodlust",
  "character": "Vampire Hunter D: Bloodlust",
  "pic": "https://upload.wikimedia.org/wikipedia/en/4/4b/Vampire-hunter-d-poster.jpg"
}, {
  "id": "17",
  "series": "Wolf Children",
  "character": "Wolf Children",
  "pic": "http://t1.gstatic.com/images?q=tbn:ANd9GcRt65AEv8UJCdkb-0is1yAbGHuXZf1MD4NMgbHyilKcyd15P1Tz"
}, {
  "id": "18",
  "series": "Howl's Moving Castle",
  "character": "Howl's Moving Castle",
  "pic": "https://img.buzzfeed.com/buzzfeed-static/static/2015-07/15/17/enhanced/webdr13/edit-31132-1436995248-5.jpg"
}, {
  "id": "19",
  "series": "Ghost In The Shell",
  "character": "motoko",
  "pic": "http://www.theactionpixel.com/wp-content/uploads/2015/10/gitsthenewmovie_3.jpg"
}, {
  "id": "20",
  "series": "Elfen Lied",
  "character": "lucy",
  "pic": "http://vignette3.wikia.nocookie.net/villains/images/3/31/Elfen_Lied_Lucy_by_D_jien.jpg/revision/latest?cb=20130726052703"
}, {
  "id": "21",
  "series": "Full Metal Alchemist Brotherhood",
  "character": "alphonse",
  "pic": "http://www.gstatic.com/tv/thumb/tvbanners/9065115/p9065115_b_v8_aa.jpg"
}, {
  "id": "22",
  "series": "Monokie Hime",
  "character": "monokie",
  "pic": "http://hivewallpaper.com/wallpaper/2014/11/mononoke-hime-anime-21-desktop-background.jpg"
}, {
  "id": "23",
  "series": "Grave Of The Fire Flies",
  "character": "Seta",
  "pic": "http://t0.gstatic.com/images?q=tbn:ANd9GcRMNDBwPmSBW9t9IyC9Xh7Izu_gzmz9_pjalzUcF-tUhmACDPR3"
}, {
  "id": "24",
  "series": "Spirited Away",
  "character": "z",
  "pic": "http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc"
}, {
  "id": "25",
  "series": "Ghost In The Shell SIC",
  "character": "Hideo Kuze",
  "pic": "http://4.bp.blogspot.com/-eXMATdehSdY/UCybsOll1BI/AAAAAAAAAGA/QS8Yh80lu6c/s1600/hideokuze_com_008.jpg"
}, {
  "id": "26",
  "series": "The wind rises",
  "character": "jiro",
  "pic": "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg"
}, {
  "id": "27",
  "series": "Porco Rosso",
  "character": "Proco",
  "pic": "https://upload.wikimedia.org/wikipedia/en/d/d9/Porco_rosso.jpg"
}, {
  "id": "28",
  "series": "nausicaa",
  "character": "nausicaa",
  "pic": "https://upload.wikimedia.org/wikipedia/en/b/bc/Nausicaaposter.jpg"
}, {
  "id": "29",
  "series": "The Girl Who Leapt Through Time",
  "character": "The Girl Who Leapt Through Time",
  "pic": "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Girl_Who_Leapt_Through_Time_poster.jpg"
}, {
  "id": "30",
  "series": "Ninja Scroll",
  "character": "Ninja Scroll",
  "pic": "http://vignette1.wikia.nocookie.net/ninjascroll/images/3/39/Ninja_Scroll_-_Kagero.jpg/revision/latest?cb=20150723194608"
}, {
  "id": "31",
  "series": "The Castle of Cagliostro",
  "character": "The Castle of Cagliostro",
  "pic": "http://vignette1.wikia.nocookie.net/lupin/images/4/44/Castle-cagliostro-poster.jpg/revision/latest?cb=20151113031340"
}, {
  "id": "32",
  "series": "Blood: The Last Vampire",
  "character": "Blood: The Last Vampire",
  "pic": "http://www.filmtakeout.com/wp-content/uploads/2016/02/blood-the-last-vampire-1.jpg"
}, {
  "id": "33",
  "series": "Vampire Hunter D: Bloodlust",
  "character": "Vampire Hunter D: Bloodlust",
  "pic": "https://upload.wikimedia.org/wikipedia/en/4/4b/Vampire-hunter-d-poster.jpg"
}, {
  "id": "34",
  "series": "Wolf Children",
  "character": "Wolf Children",
  "pic": "http://t1.gstatic.com/images?q=tbn:ANd9GcRt65AEv8UJCdkb-0is1yAbGHuXZf1MD4NMgbHyilKcyd15P1Tz"
}, {
  "id": "35",
  "series": "Howl's Moving Castle",
  "character": "Howl's Moving Castle",
  "pic": "https://img.buzzfeed.com/buzzfeed-static/static/2015-07/15/17/enhanced/webdr13/edit-31132-1436995248-5.jpg"
}, {
  "id": "36",
  "series": "Ghost In The Shell",
  "character": "motoko",
  "pic": "http://www.theactionpixel.com/wp-content/uploads/2015/10/gitsthenewmovie_3.jpg"
}, {
  "id": "37",
  "series": "Elfen Lied",
  "character": "lucy",
  "pic": "http://vignette3.wikia.nocookie.net/villains/images/3/31/Elfen_Lied_Lucy_by_D_jien.jpg/revision/latest?cb=20130726052703"
}, {
  "id": "38",
  "series": "Full Metal Alchemist Brotherhood",
  "character": "alphonse",
  "pic": "http://www.gstatic.com/tv/thumb/tvbanners/9065115/p9065115_b_v8_aa.jpg"
}, {
  "id": "39",
  "series": "Monokie Hime",
  "character": "monokie",
  "pic": "http://hivewallpaper.com/wallpaper/2014/11/mononoke-hime-anime-21-desktop-background.jpg"
}, {
  "id": "40",
  "series": "Grave Of The Fire Flies",
  "character": "Seta",
  "pic": "http://t0.gstatic.com/images?q=tbn:ANd9GcRMNDBwPmSBW9t9IyC9Xh7Izu_gzmz9_pjalzUcF-tUhmACDPR3"
}, {
  "id": "41",
  "series": "Spirited Away",
  "character": "z",
  "pic": "http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc"
}, {
  "id": "42",
  "series": "Ghost In The Shell SIC",
  "character": "Hideo Kuze",
  "pic": "http://4.bp.blogspot.com/-eXMATdehSdY/UCybsOll1BI/AAAAAAAAAGA/QS8Yh80lu6c/s1600/hideokuze_com_008.jpg"
}, {
  "id": "43",
  "series": "The wind rises",
  "character": "jiro",
  "pic": "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg"
}, {
  "id": "44",
  "series": "Porco Rosso",
  "character": "Proco",
  "pic": "https://upload.wikimedia.org/wikipedia/en/d/d9/Porco_rosso.jpg"
}, {
  "id": "45",
  "series": "nausicaa",
  "character": "nausicaa",
  "pic": "https://upload.wikimedia.org/wikipedia/en/b/bc/Nausicaaposter.jpg"
}, {
  "id": "46",
  "series": "The Girl Who Leapt Through Time",
  "character": "The Girl Who Leapt Through Time",
  "pic": "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Girl_Who_Leapt_Through_Time_poster.jpg"
}, {
  "id": "47",
  "series": "Ninja Scroll",
  "character": "Ninja Scroll",
  "pic": "http://vignette1.wikia.nocookie.net/ninjascroll/images/3/39/Ninja_Scroll_-_Kagero.jpg/revision/latest?cb=20150723194608"
}, {
  "id": "48",
  "series": "The Castle of Cagliostro",
  "character": "The Castle of Cagliostro",
  "pic": "http://vignette1.wikia.nocookie.net/lupin/images/4/44/Castle-cagliostro-poster.jpg/revision/latest?cb=20151113031340"
}, {
  "id": "49",
  "series": "Blood: The Last Vampire",
  "character": "Blood: The Last Vampire",
  "pic": "http://www.filmtakeout.com/wp-content/uploads/2016/02/blood-the-last-vampire-1.jpg"
}, {
  "id": "50",
  "series": "Vampire Hunter D: Bloodlust",
  "character": "Vampire Hunter D: Bloodlust",
  "pic": "https://upload.wikimedia.org/wikipedia/en/4/4b/Vampire-hunter-d-poster.jpg"
}, {
  "id": "51",
  "series": "Wolf Children",
  "character": "Wolf Children",
  "pic": "http://t1.gstatic.com/images?q=tbn:ANd9GcRt65AEv8UJCdkb-0is1yAbGHuXZf1MD4NMgbHyilKcyd15P1Tz"
}, {
  "id": "52",
  "series": "Howl's Moving Castle",
  "character": "Howl's Moving Castle",
  "pic": "https://img.buzzfeed.com/buzzfeed-static/static/2015-07/15/17/enhanced/webdr13/edit-31132-1436995248-5.jpg"
}, {
  "id": "53",
  "series": "Ghost In The Shell",
  "character": "motoko",
  "pic": "http://www.theactionpixel.com/wp-content/uploads/2015/10/gitsthenewmovie_3.jpg"
}, {
  "id": "54",
  "series": "Elfen Lied",
  "character": "lucy",
  "pic": "http://vignette3.wikia.nocookie.net/villains/images/3/31/Elfen_Lied_Lucy_by_D_jien.jpg/revision/latest?cb=20130726052703"
}, {
  "id": "55",
  "series": "Full Metal Alchemist Brotherhood",
  "character": "alphonse",
  "pic": "http://www.gstatic.com/tv/thumb/tvbanners/9065115/p9065115_b_v8_aa.jpg"
}, {
  "id": "56",
  "series": "Monokie Hime",
  "character": "monokie",
  "pic": "http://hivewallpaper.com/wallpaper/2014/11/mononoke-hime-anime-21-desktop-background.jpg"
}, {
  "id": "57",
  "series": "Grave Of The Fire Flies",
  "character": "Seta",
  "pic": "http://t0.gstatic.com/images?q=tbn:ANd9GcRMNDBwPmSBW9t9IyC9Xh7Izu_gzmz9_pjalzUcF-tUhmACDPR3"
}, {
  "id": "58",
  "series": "Spirited Away",
  "character": "z",
  "pic": "http://t1.gstatic.com/images?q=tbn:ANd9GcS6MveoDoJOg9-wMvtHE4ak_-HDZeYS1egb9PwRcf8lhrtcppMc"
}, {
  "id": "59",
  "series": "Ghost In The Shell SIC",
  "character": "Hideo Kuze",
  "pic": "http://4.bp.blogspot.com/-eXMATdehSdY/UCybsOll1BI/AAAAAAAAAGA/QS8Yh80lu6c/s1600/hideokuze_com_008.jpg"
}, {
  "id": "60",
  "series": "The wind rises",
  "character": "jiro",
  "pic": "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg"
}, {
  "id": "61",
  "series": "Porco Rosso",
  "character": "Proco",
  "pic": "https://upload.wikimedia.org/wikipedia/en/d/d9/Porco_rosso.jpg"
}, {
  "id": "62",
  "series": "nausicaa",
  "character": "nausicaa",
  "pic": "https://upload.wikimedia.org/wikipedia/en/b/bc/Nausicaaposter.jpg"
}, {
  "id": "63",
  "series": "The Girl Who Leapt Through Time",
  "character": "The Girl Who Leapt Through Time",
  "pic": "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Girl_Who_Leapt_Through_Time_poster.jpg"
}, {
  "id": "64",
  "series": "Ninja Scroll",
  "character": "Ninja Scroll",
  "pic": "http://vignette1.wikia.nocookie.net/ninjascroll/images/3/39/Ninja_Scroll_-_Kagero.jpg/revision/latest?cb=20150723194608"
}, {
  "id": "65",
  "series": "The Castle of Cagliostro",
  "character": "The Castle of Cagliostro",
  "pic": "http://vignette1.wikia.nocookie.net/lupin/images/4/44/Castle-cagliostro-poster.jpg/revision/latest?cb=20151113031340"
}, {
  "id": "66",
  "series": "Blood: The Last Vampire",
  "character": "Blood: The Last Vampire",
  "pic": "http://www.filmtakeout.com/wp-content/uploads/2016/02/blood-the-last-vampire-1.jpg"
}];

module.exports = function Client() {
  return new CreateClient();
};

function CreateClient() {
  console.log('mesh middleware');
  MeshMiddleware.call(this, path.join(__dirname, '../'));
}

app.get('/anime', function (req, res) {
  //MeshMiddleware.gzip(req,res);
  res.sendFile(__dirname + "/public/" + "Anime.html");
});

app.get('/animeDataSize', function (req, res) {
  res.send(data1);
});

app.get('/animeData', function (req, res) {
  var response = [];
  var pageNumber = req.param('pageNumber');
  if(pageNumber === undefined){
    pageNumber =1;
  }
  pageNumber = parseInt(pageNumber);
  console.log('pageNumber :',pageNumber);
  var a = (pageNumber-1)*10;
  var b = (pageNumber+1)*10;
  response = data1.slice(a,b);
  res.send(response);
});

app.get('/routing',function(req,res){
  console.log('routing called');
  res.sendFile(__dirname + "/public/" + "routing.html");
});

var server = app.listen(8083, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log('before utils inherits');
  util.inherits(CreateClient, MeshMiddleware);
  MeshMiddleware.call(this, path.join(__dirname, '../'));
  console.log("Example app listening at http://%s:%s", host, port);
});
