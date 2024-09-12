const submit = document.getElementById("Submit");
const condition = document.getElementById("condition");
const maxLimit = 200;
let randomNumber = Math.floor(Math.random() * maxLimit); 

submit.onclick = function() {
    try {
        let userInput = document.getElementById("textfield").value; // Get the input value
        if(!/^\d+$/){
throw new Error("Invalid");
}
        userInput = parseInt(userInput); // Parse it here

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
