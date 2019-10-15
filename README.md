# Liri Node App

1) Goal or objective of project
2) How to 
3) Screen shots/explanation of what it does
4) Programs 
5) Acknowledgments 


## Goal of Project
    In this app we are calling on three different APIs for specific data using Node.js. 
    The API's being targeted are Spotify, Bands in Town, and OMDB. 
    These will pull information for either songs, concerts, or movies inputed by the user and give specific information back. 
    For concerts you will get back the name of the venue, location of the venue, and date of the event in (MM/DD/YYY) format.
    For songs you will get the Artist (s), song name, a preview link for the song, and the Album the song is on. 
    For movie you will get the Title, Release Year, IMDB Ratings, Rotten Tomatoes Ratings, Country produced, Lanuage(s), Plot, and Actor(s). 

## Getting Started
    How to install if you clone the repo
    you need to sign up and get spotify api keys
    create a .env file put x information in there
        SPOTIFY_SECRET=process.env. 
        SPOTIFY_ID=your-spotify-id
        SPOTIFY_SECRET=your-spotify-secret
    create a .gitignore file and put x information in there
        node_modules
        .DS_Store
        .env


## Screen Shots/Examples
    When user runs `node liri.js concert-this penny and sparrow`
   
<img src="https://github.com/speechgirl1505/liri-node-app/blob/master/images/concert-this.png"/>
    
    When user runs `node liri.js spotify-this-song eloise`

<img src="https://github.com/speechgirl1505/liri-node-app/blob/master/images/spotify-this.png"/>
    
    When user runs `node liri.js movie-this super troopers`
 
<img src="https://github.com/speechgirl1505/liri-node-app/blob/master/images/movie-this.png"/>
    
    When user runs `node liri.js do-what-it-says`
   
<img src="https://github.com/speechgirl1505/liri-node-app/blob/master/images/do-what-it-says.png"/>

## Built With
    Node.js - A JavaScript runtime environment
    Moment - Parse, manipulate, and display dates in javascript.
    Axios - Promise based HTTP for node.js and browser.
    Spotify - Music API
    OMDB - Movie API
    Bands In Town - Concert API


## Acknowledgments
    My wonderfully helpful tutor and TA's 