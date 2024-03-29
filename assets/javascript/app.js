$(document).ready(function () { // ALWAYS INCLUDE!!
        console.log("ready!");

        var rightAnswerTotal = 0; // Var to hold right answer total at end of game
        var wrongAnswerTotal = 0; // Var to hold wrong answer total at end of game
        var unAnsweredTotal = 0; // Var to hold unanswered questions (timed out) at end of game
        var timerStart = 10; // Sets timer to start at 10 seconds
        var intervalId; // Variable that will hold our interval ID when we execute the "run" function

        function timer() { // *** TIMER ***

                //  Set our number counter to 10.
                var number = 11;

                //  Variable that will hold our interval ID when we execute
                //  the "run" function
                var intervalId;

                //  The run function sets an interval
                //  that runs the decrement function once a second.
                //  *****BUG FIX******** 
                //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
                function run() {
                        clearInterval(intervalId);
                        intervalId = setInterval(decrement, 1000);
                }

                //  The decrement function.
                function decrement() {

                        //  Decrease number by one.
                        number--;

                        //  Show the number in the #show-number tag.
                        $("#timer").html("<p><strong>Timer: " + number + "</strong></p>");


                        //  Once number hits zero...
                        if (number === 0) {

                                //  ...run the stop function.
                                stop();

                                //  Alert the user on the page that time is up.
                                $("#timer").html("<h1>Sorry, time's up!</h1>");

                                ////alert("Time Up!");
                        }
                }

                //  The stop function
                function stop() {

                        //  Clears our intervalId
                        //  We just pass the name of the interval
                        //  to the clearInterval function.
                        clearInterval(intervalId);
                }

                //  Execute the run function.
                run();
        }

        function question () { // Add the question to the page
                $("#question").text(gameQuestions[0].question1);
        }

        function buttons () { // Add the buttons to the page
                
                $("#button1").html("<button>" + gameQuestions[0].choices1[0] + "</button>");
                $("#button2").html("<button>" + gameQuestions[0].choices1[1] + "</button>");
                $("#button3").html("<button>" + gameQuestions[0].choices1[2] + "</button>");
                $("#button4").html("<button>" + gameQuestions[0].choices1[3] + "</button>");
        }

        function start() {

                rightAnswerTotal = 0; // Var to hold right answer total at end of game
                wrongAnswerTotal = 0; // Var to hold wrong answer total at end of game
                unAnsweredTotal = 0; // Var to hold unanswered questions (timed out) at end of game
                timerStart = 10; // Sets timer to start at 10 seconds
                intervalId; // Variable that will hold our interval ID when we execute the "run" function

        }

        // Create array for trivia game that will hold questions, answer arrays, objects

        var gameQuestions = [{
                question1: "Minnesota is home to the U.S. Hockey Hall of Fame located in which city?",
                choices1: ["St. Paul", "Eveleth", "Duluth", "Bemidji"],
                correctAnswer1: "2"

        },
        {
                question2: "Which former Minnesota Viking player went on to serve as a Justice on the Minnesota Supreme Court?",
                choices2: ["Jim Marshall", "Chuck Foreman", "Alan Page", "Carl Eller"],
                correctAnswer2: "3"
        },
        {
                question3: "Where did the Timberwolves play in their first season?",
                choices3: ["Metrodome", "Civic Center", "Met Center", "Williams Arena"],
                correctAnswer3: "1"
        },
        {
                question4: "How many championships have the Lynx won?",
                choices4: ["0", "1", "3", "4"],
                correctAnswer4: "4"
        },
        {
                question5: "In the 1991 World Series between the Minnesota Twins and Atlanta Braves, how many games were decided by one run?",
                choices5: ["2", "3", "4", "5"],
                correctAnswer5: "4" // "4" refers to button, not actual answer!
        }];

// ******************** CORE OF GAME PAGE ***************************//

        $("#start").click(function () {

                // Remove the start button from the page
                $("#start").remove();

                // Add image for question to the page

                $("#question-picture").replaceWith("<img src='assets/images/question1.jpg' alt='Hockey HOF'/>");

                question(); // Function adds question for quiz to page

                buttons(); // Function adds buttons for question choices to page

                timer();

                

        });

//*******************************************************************/


        // I CANNOT GET MY BUTTONS TO WORK!!!!

        /*
        $('.ansbutton').click(function() {
                alert($(this).("value"));
        });
        */

        /*
         $("#button1, #button2, #button3, #button4").click(function() {
                alert("Correct!");
        

        /*
                questionNum++;
                if (questionNum >= questions.length) {
                        game over!
                }
        });
        */

        /*
        $("#button1").click(function(event){
                alert($(this).prop("value"));
               });
        */


        /*
        $(".ansButton").click(function checkAnswer() { // Get value of user button push and compare against correct answer
                

        });

             
        */

        // Function runs if the user answer matches the correct answer

        var correctAnswerScreen = function () {
                $("#correct").html("<h1>CORRECT!</h1>");
                rightAnswerTotal++;
                
        }

        // Function runs if the user answer does not match the correct answer

        var wrongAnswerScreen = function () {
                $("#incorrect").html("<h1>WRONG!</h1>");
                $("#answer").text("Answer: ")
                wrongAnswerTotal++;
        }

        // Function runs once quiz is complete to show number of correct, incorrect, and unanswered questions
        var endScreen = function () {
                $("#correct").text("Number correct: " + rightAnswerTotal);
                $("#incorrect").text("Number incorrect: " + wrongAnswerTotal);
                $("#timed-out").text("Number of timed out: " + unAnsweredTotal);
        }









        





});