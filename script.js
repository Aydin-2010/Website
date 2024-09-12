const submit = document.getElementById("Submit");
const condition = document.getElementById("condition");
const maxLimit = 200;
let randomNumber = Math.floor(Math.random() * maxLimit); 

function parseIntStrict(value) {
    let chars = value.split(''); // Convert string to char array (Java-like approach)
    
    for (let i = 0; i < chars.length; i++) {
        // Check if the character is not a digit
        if (chars[i] < '0' || chars[i] > '9') {
            throw new Error("Invalid Input: Non-numeric character found"); // Throw an error if non-digit found
        }
    }
    
    return parseInt(value); // Safe to parse it into an integer after validation
}

submit.onclick = function() {
    try {
        let userInput = document.getElementById("textfield").value.trim(); // Get the input value
      /*  if(!/^\d+$/.test(userInput)){
throw new Error("Invalid");
}*/
        userInput = parseIntStrict(userInput); // Parse it here

        if (userInput === randomNumber) {
            console.log("You guessed the correct number!");
            condition.textContent = "You Won!"; 
        } else if (userInput > randomNumber) {
            console.log("Too high");
            condition.textContent = "Too High!";
            document.getElementById("textfield").value = ""; // Clear the input
        } else {
            console.log("Too low");
            condition.textContent = "Too Low!";
            document.getElementById("textfield").value = ""; // Clear the input
        }
      //condition.textContent="";
        setTimeout(function(){
        condition.style.display="none";
        },1000);
    } catch (error) {
    console.log("You made it here?");
        condition.textContent = "Invalid Input"; 
        document.getElementById("textfield").value = ""; // Clear the input
        setTimeout(function(){
        condition.style.display="none";
        }, 1000);
    }
    condition.style.display="block";
};
