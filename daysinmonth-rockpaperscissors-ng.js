//Days in Months Exercise

var month = 'February';
switch(month) {
    case 'January':
        console.log('January has 31 days');
        break;
    case 'February':
        console.log('February has 28 days');
}




// ------
//Rock Paper Scissors Exercise

function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));
        if ((userChoice === 1 && computer === 2) || (userChoice === 2 && computer === 3) || (userChoice === 3 && computer === 1)){
        console.log('Sorry, the computer wins!')}
        if ((userChoice === 2 && computer === 1) || (userChoice === 3 && computer === 2) || (userChoice === 1 && computer === 3)){
        console.log('You win!')}
        if (userChoice === computer){
        console.log('Its a tie!')    }
}

RockPaperScissors(2);