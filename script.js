document.getElementById('generateBtn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const type = document.getElementById('type').value;
    
    let characters = '';
    if (type === 'letters' || type === 'both') {
        characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (type === 'numbers' || type === 'both') {
        characters += '0123456789';
    }
    
    let password = '';
    while (password.length < length) {
        const word = generateWord();
        if (password.length + word.length <= length) {
            password += word;
        } else {
            password += word.slice(0, length - password.length);
        }
    }
    
    document.getElementById('password').innerText = password;
}

function generateWord() {
    const words = ["apple", "orange", "banana", "grape", "pear", "melon", "kiwi", "plum", "berry", "peach"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
