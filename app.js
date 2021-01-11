var user_score = 0;
var computer_score = 0; 
const user_score_span = document.getElementById("user-score");
const computer_score_span = document.getElementById("computer-score");
const score_board_div =  document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function computer_choice(){
    const choices = ['Rock','Paper','Scissors'];
    choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function game(user_choice){
    const comp_choice = computer_choice();
    switch(user_choice + comp_choice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(user_choice,comp_choice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(user_choice,comp_choice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tie(user_choice,comp_choice);
            break;
    }

}

function win(user_response,comp_response){
    user_score++;
    user_score_span.innerHTML = user_score;
    result_div.innerHTML = `${user_response}${'(User)'.fontsize(2).sub()} beats ${comp_response}${'(Computer)'.fontsize(2).sub()}. You win..!`
    document.getElementById(user_response).classList.add('win-glow');
    setTimeout(() => document.getElementById(user_response).classList.remove('win-glow'),400)
}

function lose(user_response,comp_response){
    computer_score++;
    computer_score_span.innerHTML = computer_score;
    result_div.innerHTML = `${comp_response}${'(Computer)'.fontsize(2).sub()} beats ${user_response}${'(User)'.fontsize(2).sub()}. You win..!`
    document.getElementById(user_response).classList.add('lose-glow');
    setTimeout(() => document.getElementById(user_response).classList.remove('lose-glow'),400)
}
function tie(user_response,comp_response){
    result_div.innerHTML = `${'(User)'.fontsize(2).sub()} Its a tie..! ${comp_response}${'(Computer)'.fontsize(2).sub()}`
    document.getElementById(user_response).classList.add('tie-glow');
    setTimeout(() => document.getElementById(user_response).classList.remove('tie-glow'),400)
}

function main(){
    rock_div.addEventListener('click', function(){
        game("Rock");
    })

    paper_div.addEventListener('click', function(){
        game("Paper");
    })

    scissors_div.addEventListener('click', function(){
        game("Scissors");
})
}

main();