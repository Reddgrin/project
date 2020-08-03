/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How manny movies you done allready?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How manny movies you done allready?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    private: false
};





function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Last wached movie?', ''),
              b =  prompt('please rate a movie?', '');
    
    if(a != null && b != null  && a !='' && b!='' && a.lenght <50) {
    
        personalMovieDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
         i--;
    }
    
    }
}

rememberMyFilms();




function detectPersonalLvl(){
    if (personalMovieDB.count <10){
        console.log('watched not so manny movies =(');
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count<30){
        console.log('You are a classic watcher =)');
    }else if (personalMovieDB.count >=30){
        console.log('You are crazzy madafaka :D');
    }else{
        console.log('Error');
    }
}

detectPersonalLvl();


function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);


function writeYourGenres(){
    for (let i=1; i<=3; i++){
        const genre = prompt (`your favorite genre in number ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();