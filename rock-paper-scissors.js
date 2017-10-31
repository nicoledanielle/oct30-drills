function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));
    if (userChoice === computer) {
      console.log('tie game');
    } else if ((computer === 1 && userChoice === 2) || (computer === 2 && userChoice === 3) || (computer === 3 && userChoice === 1)){
      console.log('You win!');
    } else if ((computer === 2 && userChoice === 1) || (computer === 3 && userChoice === 2) || (computer === 1 && userChoice === 3)){
      console.log('The computer wins!');
    }
}

RockPaperScissors(1);