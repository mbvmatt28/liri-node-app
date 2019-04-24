require("dotenv").config();

const keys = require("./keys.js");

const spotify = new Spotify(keys.spotify);

//concert-this ---COMMAND--- node liri.js concert-this <artist/band name here>
"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//spotify-this-song ---COMMAND--- node liri.js spotify-this-song '<song name here>'
const Spotify = require('node-spotify-api')

//movie-this ---COMMAND--- node liri.js movie-this '<movie name here>'
const axios = require("axios");

// Store all of the arguments in an array
const nodeArgs = process.argv;

// Create an empty variable for holding the movie name
const movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];

    }
}

// Run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=b38aee4";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
    function (response) {
        console.log("Release Year: " + response.data.Year);
    }
);

//do-what-it-says ---COMMAND--- node liri.js do-what-it-says