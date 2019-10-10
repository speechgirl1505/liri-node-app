require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var fs = require("fs");

// //THIS IS BANDS======================================================================================================================
// // * `concert-this`
// // node liri.js concert-this <artist/band name here>
function itsShowTime() {
  var artistName = process.argv.slice(3)
  var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

  

    axios.get(queryUrl).then(
    function(response) {
    var showTime = moment(response.data[0].datetime).format("MM/DD/YYYY")
    
    console.log(`
    Name of Venue: ${response.data[0].venue.name}
    Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.region}
    Date of Event: ${showTime}
    `);
        });
 

};

// //THIS IS SPOTIFY====================================================================================================================
// // * `spotify-this-song`
// // node liri.js spotify-this-song '<song name here>'
function playThatFunkyMusic() {
  // console.log("user chose spotify this")
  var songName = process.argv.slice(3)
  spotify
  .search({ type: 'track', query: songName })
  .then(function(response) {

    // console.log(response.tracks.items[0].preview_url)
    console.log(
      `
      Artist(s): ${response.tracks.items[0].album.artists[0].name}
      Song Name: ${response.tracks.items[0].name}
      Preview Link: ${response.tracks.items[0].preview_url}
      Album: ${response.tracks.items[0].album.name}
      `
      );
  })
  .catch(function(err) {
    console.log(err);
  });
}

//THIS IS OMDB=======================================================================================================================

function movieFunction() {
// * `movie-this`
// node liri.js movie-this '<movie name here>'
// var nodeArgs = process.argv;
// Create an empty variable for holding the movie name
var movieName = process.argv.slice(3).join("+")

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log(
      `
      Title: ${response.data.Title}
      Release Year: ${response.data.Year}
      IMDB Ratings: ${response.data.imdbRating}
      Rotten Tomatoes Ratings: ${response.data.Ratings[1].Value}
      Country produced: ${response.data.Country}
      Lanuage: ${response.data.Language}
      Plot: ${response.data.Plot}
      Actors: ${response.data.Actors}
      `
      );
    
    // console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

};

// * `do-what-it-says`
function doWhatItSays(){
console.log('do what it says is called')
fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
    // console.log(data);
    var dataArr = data.split(",");
      console.log(dataArr);
      
  var songName = dataArr[1]
  spotify
  .search({ type: 'track', query: songName })
  .then(function(response) {

    // console.log(response.tracks.items[0].preview_url)
    console.log(
      `
      Artist(s): ${response.tracks.items[0].album.artists[0].name}
      Song Name: ${response.tracks.items[0].name}
      Preview Link: ${response.tracks.items[0].preview_url}
      Album: ${response.tracks.items[0].album.name}
      `
      );
  })
  .catch(function(err) {
    console.log(err);
  });
  });
}
// node liri.js do-what-it-says


switch (process.argv[2]) {
    case "concert-this":
      itsShowTime();
      break;
    
    case "spotify-this-song":
      playThatFunkyMusic();
      break;
    
    case "movie-this":
      movieFunction()
      break;
    
    case "do-what-it-says":
      doWhatItSays();
      break;
    
      default: console.log(`
      Please run one of the following commands:
      
      concert-this
      spotify-this
      movie-this
      do-what-it-says
      `)
    }


    // node liri.js movie-this super troopers