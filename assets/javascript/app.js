$(document).ready(function () {

    // Hide the submit button
    $("#submit").hide();

    // object containing arrays of questions and answers
    var questions = [{
        question: "Coca Cola was orignally what color?",
        answers: ["Yellow", "Purple", "Green", "Blue"],
        correctAnswer: "Green"
    }, {
        question: "Which state has the highest percentage of people who walk to work?",
        answers: ["Minnesota", "California", "Florida", "Alaska"],
        correctAnswer: "Alaska"
    }, {
        question: "The king of spades in a deck of cards represents which great king from history?",
        answers: ["Alexander, the Great", "David Spade", "King David", "Julius Caesar"],
        correctAnswer: "King David"
    }, {
        question: "What is the only food that doesn't spoil?",
        answers: ["Honey", "Molasses", "Uncooked Pasta", "Ketchup"],
        correctAnswer: "Honey"
    }, {
        question: "Who was the first couple to be shown in bed together on prime TV?",
        answers: ["Dharma and Greg", "Fred and Wilma", "Bob Newhart and Suzanne Pleshette", "Lucille Ball and Ricky Ricardo"],
        correctAnswer: "Fred and Wilma"
    },]

    var number = 60;
    var intervalId;
    var button = $("#start")
    var submit = $("#submit")
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    button.on("click", start);
    button.on("click", hide);


    // Function to display questions and answers in the HTML
    // I got stuck on getting each answer to append under the questions AND to display a radio button on each answer
    function start() {
        intervalId = setInterval(decrement, 100);

        for (var i = 0; i < questions.length; i++) {
            $("#questions").append("<h3>" + questions[i].question + "</h3>");
            for (var j = 0; j < questions[i].answers.length; j++); {
                $("#questions").append("<input type='radio' name='question-" + i + "' value='" +
                    questions[i].answers[i] + "' '>" + questions[i].answers[i] + "</h5>");
            }
        }
        $("#submit").show();
    }

    // Function to decrement timer and run the stop function when it reaches "0"
    function decrement() {
        number--;

        $("#show-time").text(number);

        if (number === 0) {
            stop();
        }
    }

    // The end game function (whether the timers reaches "0" or the submit button is clicked)
    function stop() {
        $("#start").remove();
        clearInterval(intervalId);
        $("#show-time").text("Game Over!!!")
        $("#questions").empty();

        // Because I couldn't get the answers to display correctly, I wasn't able to check for correct answers and have the correct/incorrect variables incremented
        // if (question[i].answers === question[i].answers[j].correctAnswer) {
        //     correct++;
        // } else {
        //     incorrect++;
        // } 
        // console.log(correct);
        // console.log(incorrect);


        // These vars should be incremented based on correct/incorrect answers
        $("#correct").html("Correct answers: " + correct);
        $("#incorrect").html("Incorrect answers: " + incorrect);
        $("#unanswered").html("Unanswered questions: " + unanswered);

        submit.remove();
    }

    // I had this working, not sure why it's not registering the click event now :(
    $("#submit").on("click", stop);


})
