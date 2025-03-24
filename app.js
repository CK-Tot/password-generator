const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const generateBtn = document.getElementById('generate-btn');
const passwordEL1 = document.getElementById('password-1')
const passwordEL2 = document.getElementById('password-2');


const generatePassword = (length = 12) => {
    let firstPass = '';
    let secondPass = '';

    for (let i = 0; i < length; i++){
        firstPass += characters[Math.floor(Math.random() * characters.length)]
        secondPass += characters[Math.floor(Math.random() * characters.length)]

    }

    passwordEL1.textContent = firstPass;
    passwordEL2.textContent = secondPass;


}

generateBtn.addEventListener('click', () => generatePassword());
