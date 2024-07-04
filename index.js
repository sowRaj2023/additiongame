let firstNumberEl= document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let userValEl = document.getElementById("userVal");
let paraEl = document.getElementById("para");

let successMsg = "Good Luck";
let wrongMsg = "Please try";

function restartBtn(){
    let firstNumberVal = Math.random()*100;
    let secondNumberVal = Math.random()*100;

    firstNumberEl.textContent = Math.ceil(firstNumberVal);
    secondNumberEl.textContent=Math.ceil(secondNumberVal);
    
    userValEl.textContent = "";
    paraEl.textContent ="";

   
    
}

restartBtn()

function checkBtn() {
    let result1 = parseInt(firstNumberEl.textContent);
    let result2 = parseInt(secondNumberEl.textContent);

    let sum = result1 + result2;

    if(userValEl.value === sum){
        paraEl.textContent =successMsg;
    }else{
        paraEl.textContent =wrongMsg;
    }

    userValEl.value = "";

}