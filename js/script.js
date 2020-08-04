/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies:{},
    actors: {},
    genres:[],
    private: false,

    start: function () {
        personalMovieDB.count = +prompt("How manny movies you done allready?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How manny movies you done allready?", "");
        }
    },

    rememberMyFilms: function (){
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
    },

    detectPersonalLvl: function(){
        if (personalMovieDB.count <10){
            console.log('watched not so manny movies =(');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count<30){
            console.log('You are a classic watcher =)');
        }else if (personalMovieDB.count >=30){
            console.log('You are crazzy madafaka :D');
        }else{
            console.log('Error');
        }
    },

    showMyDB:function (hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function (){
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    },

    writeYourGenres: function(){
        for (let i=1; i<=3; i++){
            const genre = prompt (`your favorite genre in number ${i}`);
            personalMovieDB.genres[i - 1] = genre;
        }
    }
    
    
};


