$( document ).ready(function() { // ALWAYS INCLUDE!!
        console.log( "ready!" );


        var start = function() {

                var rightAnswerTotal = 0; // Var to hold right answer total at end of game
                var wrongAnswerTotal = 0; // Var to hold wrong answer total at end of game
                var unAnsweredTotal = 0; // Var to hold unanswered questions (timed out) at end of game
                var timerStart = 10; // Sets timer to start at 10 seconds
                var intervalId; // Variable that will hold our interval ID when we execute the "run" function

        }

        // Create array for trivia game that will hold questions, answer arrays, objects

        var gameQuestions = [{
                question1: "Minnesota is home to the U.S. Hockey Hall of Fame located in which city?", 
                choices1: ["St. Paul", "Eveleth", "Duluth", "Bemidji"],
                correctAnswer1: "Eveleth"
                
        },
        {
                question2: "Which former Minnesota Viking player went on to serve as a Justice on the Minnesota Supreme Court?",
                choices2: ["Jim Marshall", "Chuck Foreman", "Alan Page", "Carl Eller"],
                correctAnswer2: "Alan Page"
        },
        {
                question3: "Where did the Timberwolves play in their first season?",
                choices3: ["Metrodome", "Civic Center", "Met Center", "Williams Arena"],
                correctAnswer3: "Metrodome"
        },
        {
                question4: "How many championships have the Lynx won?",
                choices4: ["0", "1", "3", "4"],
                correctAnswer4: "4"
        },
        {
                question5: "In the 1991 World Series between the Minnesota Twins and Atlanta Braves, how many games were decided by one run?",
                choices5: ["2", "3", "4", "5"],
                correctAnswer5: "5"
        }];

        console.log(gameQuestions[0].choices1[1]);

        $("#start").click(function(){

                // Add image for question to the page

                //$("$question-picture").remove();
                $("#question-picture").replaceWith("<img src='assets/images/question1.jpg'/>");

                // Add the question to the page
                $("#question").text(gameQuestions[0].question1);

                // Add the buttons to the page

                $("#button1").html("<button>" + gameQuestions[0].choices1[0] + "</button>");
                $("#button2").html("<button>" + gameQuestions[0].choices1[1] + "</button>");
                $("#button3").html("<button>" + gameQuestions[0].choices1[2] + "</button>");
                $("#button4").html("<button>" + gameQuestions[0].choices1[3] + "</button>");

                // Remove the start button from the page
                $("#start").remove();


                // *** TIMER ***

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

                        //  Alert the user that time is up.
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


        });


       



});