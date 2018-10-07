// VARIBLES //
    var charactersArry = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var userChoice = []; // Blank array created
    var winCount = "0";  // Start with blank placeholder
    var looseCount = "0";  // Start with blank placeholder
    var guessesLeft = "0";  // Start with blank placeholder


// GAME INITALIZES RESETS COUNTS

initalizeGame()


// CREATE AS FUNCTIONS?
    // var userChoice_Display = document.querySelector("#userChoice_Display").innerHTML = userChoice;
    // var winCount_Display = document.querySelector("#winCount_Display").innerHTML = winCount;
    // var looseCount_Display = document.querySelector("#looseCount_Display").innerHTML = looseCount;
    // var guessesLeft_Display = document.querySelector("#guessesLeft_Display").innerHTML = guessesLeft;


// FUNCTIONS //
// * // Eventually use this.display?

// * // CREATE FUNCTIONS FOR VARS ABOVE?
//  document.getElementById("userChoice_Display").innerHTML = userChoice;
    //accesses the document object with "querySelectorById" HTML element #userChoice_Display. 
    // .innerHTML writes the array userChoice to the element #userChoice_Display;
   
// * // Create for loop to utilize "any_Display" (Should be DRY)
// UPDATES element #userChoice_Display with global var userChoice
    function userChoice_Display() { // Creates function named userChoice_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#userChoice_Display").innerHTML = userChoice;
        // Accesses the "document" element userChoice_Display. .innerHTML writes the value of UserChoice to the userChoice_Display array
    }    

//  UPDATES element #winCount_Display with global var winCount
    function winCount_Display() { // Creates function named winCount_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#winCount_Display").innerHTML = winCount; 
    // Accesses the "document" element userChoice_Display. .innerHTML writes the output if UserChoice to the userChoice_Display array
    }    

//  UPDATES element #looseCount_Display with global var looseCount 
    function looseCount_Display() { // Creates function named looseCount_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#looseCount_Display").innerHTML = looseCount;
    // Accesses the "document" element userChoice_Display. .innerHTML writes the output if UserChoice to the userChoice_Display array
    }   
    
//  UPDATES element #guessesLeft_Display with global var guessesLeft 
    function guessesLeft_Display() { // Creates function named guessesLeft_Display with empty varible (). Curly brackets open the function.
        document.querySelector("#guessesLeft_Display").innerHTML = guessesLeft;
    // Accesses the "document" element userChoice_Display. .innerHTML writes the output if UserChoice to the userChoice_Display array
    }   


// * // if guessesLeft = more then 0 the continue loop otherwise resetRound
    
    // while guessesLeft > 0 {}

    // function resetRound() {
    // guessesLeft = 9;
    // }


// ComputerChoice picks from characterArry

    // .length runs first that asks for the numerical value of the array charactersArry. (Math.random() *) 
    //  picks a random value "between 1 and 25" and multiplies it by CharactersArry.length.
    // .length give you a numberical value equal to the number of characters in the array 25. "Math.floor rounds the number down. Run this first 
    // then Multiplies by the random in charactersArry number.  Max 25 from length 
    var computerChoice = charactersArry[Math.floor(Math.random() * charactersArry.length)];
    
    console.log('---- computerChoice ----')
    console.log(computerChoice);
  
    //  1. Document awaits any button pressed and released, creates a function (event)
   document.onkeyup = function(event) {
       // Get user input. _Next assign var keyPress
       // * // toLowerCase //

// Key was pressed   
    var keyPress = event.key; // This varible captures the key press and gives it the varible of keyPress. 
        // * // Should exclue anything but charactersArry
    
        // Store event.key to array userChoice
    userChoice.push(keyPress); // Storing to arry userChoice
    // * // Need to display the button presses.

    // Troublshooting userChoice
    // console.log('---- userChoice ----');
    // console.log(userChoice); // Displays userChoice in console.log. 

    userChoice_Display()

// Compare user userChoice to computerChoice;

        // if userChoice match exactly then is === 'true' executive commands
        if (keyPress === computerChoice) {
           // Accesses the "document" element userChoice_Display. .innerHTML writes the output to the element userChoice_Display
        //  which is a global array. Update the display.            winCount++;
            
            winCount++; // x = x + 1
            winCount_Display() // Update winCount_Display
            console.log('---- winCount ----')
            console.log(winCount);
            userChoice_Display // Updates display
            guessesLeft--
            // * // resetRound // needs start from the begining without initalizeGame
        }

        else if (userChoice != computerChoice) {
            // function 
            looseCount++;
            looseCount_Display()
            console.log('---- looseCount ----')
            console.log(looseCount);
            userChoice_Display // Updates display
            guessesLeft--
        }
    } // Close the funtion 


// Outside of for loop resets everything



        function initalizeGame() { // Set wins and losses to 0 guessesLeft to 9 clear userChoice_Display
            console.log('---- initializeGame ----')
            winCount = 0; console.log('winCount--' + winCount)
            looseCount = 0; console.log('looseCount--' + looseCount)
            guessesLeft = 9; console.log('guessesLeft--' + guessesLeft)
            userChoice.length = 0; console.log(userChoice)
        }

    // var charsTyped = [];

    // document.onkeypress = function(evt) {
    //     evt = evt || window.event;
    
    //     // Ensure we only handle printable keys
    //     var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;
    
    //     if (charCode) {
    //         charsTyped.push(String.fromCharCode(charCode));
    //     }
    //     console.log(evt)
    // };