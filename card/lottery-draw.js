let resultButton = document.getElementById("openModal");
let modalDisplay = document.getElementById("result1");
let displayonBody = document.getElementById("result2");

resultButton.addEventListener("click",displayresult);

function displayresult() {
    let array = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  
    let winner = array[Math.floor(Math.random() * (array.length))];
    console.log(winner);
  
    modalDisplay.innerText = winner;
    displayonBody.innerText = winner;
  }