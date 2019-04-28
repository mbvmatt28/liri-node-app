//require("dotenv").config();
const axios = require("axios");
const nodeArgs = process.argv;
const command = process.argv[2];




const keys = require("./keys.js");

//const Spotify = new Spotify(keys.spotify);



//concert-this ---COMMAND--- node liri.js concert-this <artist/band name here>
let artist = "";

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        artist = artist + "+" + nodeArgs[i];
    }
    else {
        artist += nodeArgs[i];

    }
}
if (command === "concert-this") {
    band();
}
function band() {
    let queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response){
            console.log("Venue: " + response.data.venue.name);
            console.log("Location: " + response.data.venue.city);
            console.log("Date: " + response.data.datetime);
            
            
        }
    )
}


//spotify-this-song ---COMMAND--- node liri.js spotify-this-song '<song name here>'
//let Spotify = require('node-spotify-api')

let spot = "";

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        spot = spot + "+" + nodeArgs[i];
    }
    else {
        spot += nodeArgs[i];

    }
}
if (command === "spotify-this-song") {
    spotify();
}
function spotify() {
    let queryUrl = "https://api.spotify.com/v1/" + spot;
    axios.get(queryUrl).then(
        function (response){
            console.log(response.data)
            
            
        }
    )
}
//var Spotify = require('node-spotify-api');
 
//let Spotify = new Spotify({
 // id: f9223a471ea64d389028520e2b57dc25,
 // secret: f3520621797b45ada5da5a3dd1119e0f
//});
 
//spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//  if (err) {
//    return console.log('Error occurred: ' + err);
 // }
 
//console.log(data); 
//});
//movie-this ---COMMAND--- node liri.js movie-this '<movie name here>'

let movieName = "";

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];

    }
}
if (command === "movie-this") {
    movie();
}

function movie() {
    let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    axios.get(queryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("OMDB Rating: " + response.data.imdbRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            
            
        }

    );
}




