//require(".env").config();

const keys = require("./keys.js");

//const spotify = new Spotify(keys.spotify);

//concert-this ---COMMAND--- node liri.js concert-this <artist/band name here>
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//spotify-this-song ---COMMAND--- node liri.js spotify-this-song '<song name here>'
//const Spotify = require('node-spotify-api')

//movie-this ---COMMAND--- node liri.js movie-this '<movie name here>'
const axios = require("axios");
const nodeArgs = process.argv;
let movieName = "";
const command = process.argv[2];




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

function movie(){
    const queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    console.log(queryUrl);
    axios.get(queryUrl).then(
        function (response) {
            console.log("Release Year: " + response.data.Year);
        }
    
    );
}


//do-what-it-says ---COMMAND--- node liri.js do-what-it-says

