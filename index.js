
//Variables
let characters = []; //[91]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
// const numLet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// const numSymb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
// const letSymb = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let passwordLength = 20
let passwordvar = ""
let password1 = []
let password2 = [] 


//Elements
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let numbersCb = document.getElementById("numbers-cb")
let lettersCb = document.getElementById("letters-cb")
let symbolsCb = document.getElementById("symbols-cb")
let inputVa = document.getElementById("input-p")
let test = document.getElementById("test")
password1El.textContent = " "
password2El.textContent = " "
// test.textContent = inputVa

//Value

//Functions
function checks() {
if (numbersCb.checked === true) {
    characters.push(...numbers)
  } else {

  }

}


function getPassword() {
    let characters = []; 
     numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
 symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
    // checks()
    
    password1El.textContent = " "
    password2El.textContent = " "
    let password1 = []
    let password2 = [] 
    if (numbersCb.checked === true) {
        characters.push(...numbers)
      } 
    if (lettersCb.checked === true) {
        characters.push(...letters)
      } 
    if (symbolsCb.checked === true) {
        characters.push(...symbols)
      }
    if (inputVa.value > 20) {
        inputVa.value = 20
    }
   
    for (let i = 0; i < inputVa.value; i++){
        let passwordvar = Math.floor(Math.random()*characters.length)
        password1.push(characters[passwordvar])
        password1El.textContent += password1[i]
        passwordvar = Math.floor(Math.random()*characters.length)
        password2.push(characters[passwordvar])
        password2El.textContent += password2[i]
    } 
}

function copyCb() {
    
    navigator.clipboard.writeText(password1El.textContent).value
}