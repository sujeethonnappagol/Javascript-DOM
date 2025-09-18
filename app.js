// function locked(){
//     let heading = document.getElementById('heading')
//     heading.innerText = "congratulations! you have successfully completed all the previous lectures of javascript, Sujeet"
//     let btn = document.getElementById('btn')
//     btn.style.display = 'none'
// }
// locked()

// function welcome(){
//     let StudentName = document.getElementById('name')
//     let namespan = document.getElementById('namespan')
//     namespan.innerText = StudentName.value
//     StudentName.value = ""
// }
// welcome()

// function split(){
//     let amount = document.getElementById('amount');
//     let persons = document.getElementById('persons');
//     let result = (amount.value / persons.value).toFixed(2);
//     let resultDiv = document.getElementById('result');
//     resultDiv.innerText = result;
// }
// split()

// let counter = 0;
// function increment(){
//     counter = counter + 1;
//     let counterResult = document.getElementById('counterResult');
//     counterResult.innerText = counter
// }

// function decrement(){
//     if (counter > 0){
//         counter = counter - 1;
//         let counterResult = document.getElementById('counterResult');
//         counterResult.innerText = counter
//     }
// }



function add(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let number = Number;
    let result = number(num1) + Number(num2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;    
}
function sub(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let number = Number;
    let result = number(num1) - Number(num2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;    
}
function mult(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let number = Number;
    let result = number(num1) * Number(num2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;    
}
function div(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let number = Number;
    let result = number(num1) / Number(num2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;    
}