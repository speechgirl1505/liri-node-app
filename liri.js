require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//THIS IS BANDS======================================================================================================================
// * `concert-this`
// node liri.js concert-this <artist/band name here>
"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

//THIS IS SPOTIFY====================================================================================================================
// * `spotify-this-song`
// node liri.js spotify-this-song '<song name here>'
var spotify = require("spotify");


//THIS IS OMDB=======================================================================================================================
// * `movie-this`
// node liri.js movie-this '<movie name here>'
var axios = require("axios");
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

//var movieName = process.argv.slice(2).join("+")

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  } else {
    movieName += nodeArgs[i];

  }
}
// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

// * `do-what-it-says`
// node liri.js do-what-it-says


switch (key) {
    case "oncert-this":
      ();
      break;
    
    case "spotify-this-song":
      ();
      break;
    
    case "movie-this":
      ();
      break;
    
    case "do-what-it-says":
      ();
      break;
    }