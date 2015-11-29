$(document).ready(function () {
    /*Game picks a number (autopicks)*/
    var totalGuess = 0;
    var num = Math.floor(Math.random() * 100 + 1);
    console.log(num);
    /*--Start new game function--*/
    function guess() {
        var guessValue = $('#userGuess').val();
        console.log(guessValue);
        if ((guessValue == "") || (guessValue == " ") || (guessValue == "  ")) {
            alert("Please select a number between 1-100");
        } else {
            totalGuess++;
            /*The user then enters #, which is understood-and get feedback about each guess */
            if (Math.abs(guessValue - num) >= 50) {
                $("h2").text("You are really cold");
            } else if ((Math.abs(guessValue - num) <= 49) && (Math.abs(guessValue - num) >= 30)) {
                $("h2").text("You are cold");
            } else if ((Math.abs(guessValue - num) <= 29) && (Math.abs(guessValue - num) >= 15)) {
                $("h2").text("You are warm");
            } else if ((Math.abs(guessValue - num) <= 14) && (Math.abs(guessValue - num) >= 5)) {
                $("h2").text("You are really hot");
            } else if ((Math.abs(guessValue - num) <= 4) && (Math.abs(guessValue - num) >= 1)) {
                $("h2").text("You are on fire");
            } else {
                $("h2").text("You won!!!!");
            }
            $("#count").html(totalGuess);
            $("#guessList").append("<li>" + guessValue + "</li>");
        }
        $('#userGuess').val('');
    }
    $('#guessButton').on('click', guess);

    /*---Start New Game---*/
    $(".new").click(function () {
        location.reload();
    });
    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);
    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });
});
