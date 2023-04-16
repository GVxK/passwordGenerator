
//Variables
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; //[91]
let password1 = []
let password2 = []
let passwordLength = 10
let passwordvar = ""

//Elements
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

//Messages
password1El.textContent = ""

//Functions
function getPassword() {
    
    for (let i = 0; i < passwordLength; i++){
        let passwordvar = Math.floor(Math.random()*91)
        password1.push(characters[passwordvar])
        password1El.textContent += password1[i]
        passwordvar = Math.floor(Math.random()*91)
        password2.push(characters[passwordvar])
        password2El.textContent += password2[i]
    }
}