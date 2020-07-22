import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final

function home2014(fifaData){
    for(let i = 0; i < fifaData.length; i++){
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final'){
            return fifaData[i]['Home Team Name'];
        }
    }
}

console.log(home2014(fifaData));

// (b) Away Team name for 2014 world cup final

function away2014(fifaData){
    for(let i = 0; i < fifaData.length; i++){
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final'){
            return fifaData[i]['Away Team Name'];
        }
    }
}

console.log(away2014(fifaData));

// (c) Home Team goals for 2014 world cup final

function home2014goals(fifaData){
    for(let i = 0; i < fifaData.length; i++){
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final'){
            return fifaData[i]['Home Team Goals'];
        }
    }
}

console.log('From line 43:', home2014goals(fifaData));

// (d) Away Team goals for 2014 world cup final

function away2014goals(fifaData){
    for(let i = 0; i < fifaData.length; i++){
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final'){
            return fifaData[i]['Away Team Goals'];
        }
    }
}

console.log('From line 55:', away2014goals(fifaData));


// (e) Winner of 2014 world cup final 

function winner2014(fifaData){
    for(let i = 0; i < fifaData.length; i++){
        if(fifaData[i].Year === 2014 && fifaData[i].Stage === 'Final'){
            if(fifaData[i]['Home Team Goals'] > fifaData[i]['Away Team Goals']){
                return fifaData[i]['Home Team Name'];
            }else {
                return fifaData[i]['Away Team Name'];
            }
        }
    }
}
    
console.log('From line 72:', winner2014(fifaData));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalArray = data.filter(function(item){
        return item.Stage === 'Final';
    }) ;
return finalArray;

};

console.log('From line 84:', getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
   const years = callback(fifaData).map(function(item){
       return item.Year;
   });
   return years;
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const winners = callback(fifaData).map(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        }else{
            return item['Away Team Name'];
        }
    });
    return winners;
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getfinalscb, data) {
    
    const result = getfinalscb(data).map(function(item){
        if(item['Home Team Goals'] > item['Away Team Goals']){
        return `The winner in ${item['Year']} was ${item['Home Team Name']}.`;
    }else{
        return `The winner in ${item['Year']} was ${item['Away Team Name']}.`;
    }
    });
return result;
  
};
 
console.log(getWinnersByYear(getFinals, fifaData));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const totalGoals = data.reduce(function(accumulator, item){
        return accumulator + item['Home Team Goals'] + item['Away Team Goals'];
    },0);
    return totalGoals / data.length;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
