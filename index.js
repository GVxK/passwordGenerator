
//Variables
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; //[91]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numLet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numSymb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const letSymb = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let passwordLength = 50
let passwordvar = ""

//Elements
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let numbersCb = document.getElementById("numbers-cb")
let lettersCb = document.getElementById("letters-cb")
let symbolsCb = document.getElementById("symbols-cb")



//Functions
function getPassword() {
    password1El.textContent = " "
    password2El.textContent = " "
    let password1 = []
    let password2 = []
     
    if (numbersCb.checked === true && lettersCb.checked === true && symbolsCb.checked === true) {
    for (let i = 0; i < passwordLength; i++){
        let passwordvar = Math.floor(Math.random()*characters.length)
        password1.push(characters[passwordvar])
        password1El.textContent += password1[i]
        passwordvar = Math.floor(Math.random()*characters.length)
        password2.push(characters[passwordvar])
        password2El.textContent += password2[i]
    } 
    } else if (numbersCb.checked === true && lettersCb.checked === false && symbolsCb.checked === false) {
        for (let i = 0; i < passwordLength; i++){
            let passwordvar = Math.floor(Math.random()*numbers.length)
            password1.push(numbers[passwordvar])
            password1El.textContent += password1[i]
            passwordvar = Math.floor(Math.random()*numbers.length)
            password2.push(numbers[passwordvar])
            password2El.textContent += password2[i]
        }  
    } else if (numbersCb.checked === false && lettersCb.checked === true && symbolsCb.checked === false) {
        for (let i = 0; i < passwordLength; i++){
            let passwordvar = Math.floor(Math.random()*letters.length)
            password1.push(letters[passwordvar])
            password1El.textContent += password1[i]
            passwordvar = Math.floor(Math.random()*letters.length)
            password2.push(letters[passwordvar])
            password2El.textContent += password2[i]
        }  
    } else if (numbersCb.checked === false && lettersCb.checked === false && symbolsCb.checked === true) {
        for (let i = 0; i < passwordLength; i++){
            let passwordvar = Math.floor(Math.random()*symbols.length)
            password1.push(symbols[passwordvar])
            password1El.textContent += password1[i]
            passwordvar = Math.floor(Math.random()*symbols.length)
            password2.push(symbols[passwordvar])
            password2El.textContent += password2[i]
        }  
    } else if (numbersCb.checked === true && lettersCb.checked === true && symbolsCb.checked === false) {
        for (let i = 0; i < passwordLength; i++){
            let passwordvar = Math.floor(Math.random()*numLet.length)
            password1.push(numLet[passwordvar])
            password1El.textContent += password1[i]
            passwordvar = Math.floor(Math.random()*numLet.length)
            password2.push(numLet[passwordvar])
            password2El.textContent += password2[i]
        }  
    } else if (numbersCb.checked === true && lettersCb.checked === false && symbolsCb.checked === true) {
        for (let i = 0; i < passwordLength; i++){
            let passwordvar = Math.floor(Math.random()*numSymb.length)
            password1.push(numSymb[passwordvar])
            password1El.textContent += password1[i]
            passwordvar = Math.floor(Math.random()*numSymb.length)
            password2.push(numSymb[passwordvar])
            password2El.textContent += password2[i]
        }  
    } else if (numbersCb.checked === false && lettersCb.checked === true && symbolsCb.checked === true) {
        for (let i = 0; i < passwordLength; i++){
            let passwordvar = Math.floor(Math.random()*letSymb.length)
            password1.push(letSymb[passwordvar])
            password1El.textContent += password1[i]
            passwordvar = Math.floor(Math.random()*letSymb.length)
            password2.push(letSymb[passwordvar])
            password2El.textContent += password2[i]
        }  
    }
} 

