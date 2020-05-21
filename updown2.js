const range2 = 100;
const answer2 = Math.ceil(Math.random() * range2);
console.log(answer2);
const inputTag2 = document.getElementById("input2");
const resultDiv2 = document.getElementById("result2");
const formBtn2 = document.getElementById("formBtn2");
const displayLife2 = document.getElementById("lifecnt2");

let life2 = 10;
formBtn2.onclick = (event) => {
    life2 -= 1;
    displayLife2.textContent = life2;
    const userInput2 = Number(inputTag2.value);
    const result2 = document.createElement('h2');
    result2.textContent = userInput2 + " 👉🏻 ";

    if (userInput2 === answer2){
        result2.textContent += "Answer";
        alert("You are Correct!");
    } 
    else {
        if (life2 > 0){
            event.preventDefault();
            (userInput2 > answer2) ? (result2.textContent += "Down"):(result2.textContent += "Up");
             inputTag2.focus();
        }
        else {
            alert("You failed!\nThe answer is "  + answer2);
        }
    }
    resultDiv2.append(result2);
    inputTag2.value = ' ';
}