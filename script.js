document.getElementById('generateButton').addEventListener('click', generatePassword);

async function generatePassword() {
    const length = document.getElementById('length').value;
    const type = document.getElementById('type').value;
    const word = await getWord();

    let password = word.slice(0, length);
    if (type === 'lettersNumbers') {
        password = addNumbers(password, length);
    } else if (type === 'lettersNumbersSpecial') {
        password = addSpecialCharacters(addNumbers(password, length), length);
    }

    password = ensureTypeInclusion(password, type);

    document.getElementById('password').innerText = password;
    document.getElementById('securityLevel').innerText = getPasswordSecurityLevel(password);
}

async function getWord() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error fetching word:', error);
        return 'defaultword';
    }
}

function addNumbers(word, length) {
    const numbers = '0123456789';
    while (word.length < length) {
        word += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return word;
}

function addSpecialCharacters(word, length) {
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    while (word.length < length) {
        word += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    }
    return word;
}

function ensureTypeInclusion(password, type) {
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (type === 'lettersNumbers' && !/\d/.test(password)) {
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    } else if (type === 'lettersNumbersSpecial') {
        if (!/\d/.test(password)) {
            password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        if (!/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)) {
            password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        }
    }

    return password;
}

function getPasswordSecurityLevel(password) {
    if (password.length < 8) {
        return 1;
    } else if (password.length < 10) {
        return 2;
    } else if (password.length < 12) {
        return 3;
    } else if (password.length < 14) {
        return 4;
    } else {
        return 5;
    }
}
