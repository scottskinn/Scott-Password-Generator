// Assignment code here

// setting the ramdon numbers and letters

// function getRandonLower(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// },

// function getRandonUpper(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// },

// function getRandonNumber(){
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// },
// function getRandonSymbol(){
//   const symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ "
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }]
let randomCharactorString= "";
let CharactorSet =[
{
  Charactor: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  name: "Special Characters",
  use: false
},
{
  Charactor: "0123456789",
  name: "Number Characters",
  use: false
},
{
  Charactor: "abcdefghijklmnopqrstuvwxyz",
  name: "Lowercase Letters",
  use: false
},
{
  Charactor: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  name: "Uppercase Letters",
  use: false
}]

//console.log(getRandonSymbol());

const generate = () => {
  let passwordLength = parseInt(prompt("Please select a password lenght between 8 - 128 characters"));
  let passwordString ="";

  if (passwordLength > 7 && passwordLength < 129) {
    CharactorSet.forEach(set => {
      const useCharactor = (confirm(`Do you want to use ${set.name}?`));
            if (useCharactor == true) {
                set.use = true;
            }
            if(set.use){
                randomCharactorString = randomCharactorString + set.Charactor;
            }
        });
        console.log(JSON.stringify(CharactorSet))
    }
    else {
        alert("Your password does not meet the requirements. Please refresh and try again.");
    }

    //generate random password based on characters the user wants to use 
    if (randomCharactorString !== "") {
        for (i = 0; i < passwordLength; i++) {
            passwordString = passwordString + randomCharactorString.charAt(Math.floor(Math.random() * Math.floor((randomCharactorString.length) - 1)));
            console.log(randomCharactorString)
        }

        document.getElementById("password").value = passwordString;
    }
    else {
        alert("You must use at least one kind of character. Please refresh and try again.");
    }
}


// generatePassword(generatorBtn);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
