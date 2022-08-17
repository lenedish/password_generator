const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const lowercase = ['a', 'b', 'c', 'b', 'e', 'f', 'g', 'h', 'i',
                      'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
                      's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const uppercase = ['A', 'B', 'C', 'B', 'E', 'F', 'G', 'H', 'I',
                      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                      'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', 
                 '+', '-', ',', '.', '/', ':', ';', '<', '=', '>', '?',];

let passChars = [];
let password = [];

display = document.getElementById('generated-password-input');

const button = document.querySelector('#generate-button');

button.addEventListener('click', function() {
    const checkboxs = document.querySelectorAll('.checkbox');

    const passLength = document.getElementById('lenght-number-input').value;

    // Loop through checkboxes and if checked add to passChars array
    checkboxs.forEach(function (checkbox) {
        if (checkbox.checked == true) {
            if (checkbox.name == 'lowercase')
                passChars = passChars.concat(lowercase);
            else if (checkbox.name == 'uppercase') {
                passChars = passChars.concat(uppercase);
            }
            else if (checkbox.name == 'numbers') {
                passChars = passChars.concat(numbers);
            }
            else {
                passChars = passChars.concat(symbols);
            }
        }
    })

    // If none of checkbox is checked or length equal 0 display none, 
    // otherwise generate password and display
    if (passChars.length == 0 || passLength == 0) {
        display.value = "None. Please provide input";
        display.style.borderColor = 'orange';
    }
    else {
        for (let i = 0; i < passLength; i++) {
            password += passChars[Math.floor(Math.random() * passChars.length)];
        }
    
        display.value = password;
        display.style.borderColor = 'green';
    }

    // Reset chars and password arrays
    password = [];
    passChars = [];
});