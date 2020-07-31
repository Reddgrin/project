"use strict";

const numberOfFilms = +prompt("How manny movies you done allready?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    private: false
};

const a = prompt('Last wached movie?', ''),
      b =  prompt('please ocenice movie?', ''),
      c = prompt('Last wached movie?', ''),
      d = prompt('please ocenice movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);