# liri-node-app

1) Goal or objective of project
2) How to 
3) Screen shots/explanation of what it does
4) Programs 
5) Acknowledgments 

link images into readme
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet


# Liri Node App

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
    When user runs `node liri.js concert-this banks`
    Inline-style: 
![Concert-this](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Concert-this")
    When user runs `node liri.js spotify-this-song goddess`
Inline-style: 
![aSpotify-this](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Spotify-this")
    When user runs `node liri.js movie-this super troopers`
Inline-style: 
![Movie-this](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Movie-this")
    When user runs `node liri.js so-what-it-says`
    Inline-style: 
![Do-what-it-says](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Do-what-it-says")

## Built With
    Node.js - A JavaScript runtime environment
    Moment - Parse, manipulate, and display dates in javascript.
    Axios - Promise based HTTP for node.js and browser.
    Spotify - Music API
    OMDB - Movie API
    Bands In Town - Concert API


## Acknowledgments
    My wonderfully helpful tutor and TA's 