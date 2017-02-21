/**Created by fanxueyi on 1/31/17.**/

var colors;
var target;
var guess_input;
var finished = false;
var guesses = 0;


function do_game() {
    colors = ["blue", "cyan", "gold", "gray", "green",
              "magenta","orange", "red","white","yellow"];
    colors.sort();
    var random_number = Math.random() * colors.length;
    var random_number_int = Math.floor(random_number);
    target = colors[random_number_int];

    while (!finished){
        guess_input = prompt("I am thinking of one of these colors: \n" +
                            colors.join(",") +
                            "\nWhat color am I thinking of?");

        guesses++;
        finished = check_guess();
    }

}

function check_guess(){
    if (colors.indexOf(guess_input) != -1){
        if (guess_input > target){
            alert("Sorry, your guess is not correct!\nHint: your color is alphabetically higher than mine.\nPlease try agian.");
            return(false);
        }
        else if (guess_input < target){
            alert("Sorry, your guess is not correct!\nHint: your color is alphabetically lower than mine.\nPlease try agian.");
            return(false);
        }
        else if (guess_input == target){
            myBody=document.getElementsByTagName("body")[0];
            myBody.style.background = target
            alert("Congratulations! You have guessed the color!\nIt took you "+
                guesses+
                " to finish the game!\n You can see the color in the background.");
            return true;
        }

    }
    else {
        alert("Sorry, I don't recognize your color.\n Please try again.");
        return(false)
    }


}
