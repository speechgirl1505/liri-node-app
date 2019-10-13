//Globals variables
require("dotenv").config();
var axios = require("axios");
var moment = require("moment");
var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var fs = require("fs");


// //THIS IS BANDS======================================================================================================================
// concert-this function 
function itsShowTime(artistName) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
    function(response) {
    var showTime = moment(response.data[0].datetime).format("MM/DD/YYYY")
    console.log(`
    Name of Venue: ${response.data[0].venue.name}
    Venue Location: ${response.data[0].venue.city}, ${response.data[0].venue.region}
    Date of Event: ${showTime}
    `);

    // response.data.forEach(function(response) {
    //   var showTime = moment(response.datetime).format("MM/DD/YYYY");
    //   console.log(
    //     `
    //     Name of Venue: ${response.venue.name}
    //     Venue Location: ${response.venue.city}, ${response.venue.region}
    //     Date of Event: ${response.showTime}
    //     `
    //     );
    })
    .catch(function(error) {
      console.log(error);
    });
};
// //THIS IS SPOTIFY====================================================================================================================
// // spotify-this-song function 
function playThatFunkyMusic(songName) {
  spotify
  .search({ type: 'track', query: songName})
  .then(function(response) {

    response.tracks.items.forEach(function(song) {
      console.log(
        `
        Artist(s): ${song.album.artists[0].name}
        Song Name: ${song.name}
        Preview Link: ${song.preview_url}
        Album: ${song.album.name}
        `
        );
    });

    // console.log(
    //   `
    //   Artist(s): ${response.tracks.items[0].album.artists[0].name}
    //   Song Name: ${response.tracks.items[0].name}
    //   Preview Link: ${response.tracks.items[0].preview_url}
    //   Album: ${response.tracks.items[0].album.name}
    //   `
    //   );
  })
  .catch(function(err) {
    console.log(err);
  });
}
//THIS IS OMDB=======================================================================================================================
// movie-this function 
function action(movieName) {
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

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
    

  })
  .catch(function(error) {
    console.log(error);
  });

};
// THIS IS do-what-it-says=========================================================================================================
// do-what-it-says function
function doIt(){
console.log('do what it says is called')
fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    console.log(dataArr);
    doWhatISay(dataArr[0],dataArr[1]);
});
}

function doWhatISay(method,item){
switch (method) {
    case "concert-this":
      itsShowTime(item);
      break;
    
    case "spotify-this-song":
      playThatFunkyMusic(item);
      break;
    
    case "movie-this":
      action(item)
      break;
    
    case "do-what-it-says":
      doIt();
      break;
    
      default: console.log(`
      Please run one of the following commands:
      
      concert-this
      spotify-this
      movie-this
      do-what-it-says
      `)
    }
};

var whatDoYouWant = process.argv.slice(3).join(" ");
doWhatISay(process.argv[2],whatDoYouWant);