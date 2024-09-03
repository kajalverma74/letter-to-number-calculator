// Mapping letters to numbers
const letterToNumber = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
    'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
    'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15,
    'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20,
    'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25,
    'Z': 26
};

// Function to calculate the result based on letters and selected operation
function calculateResult() {
    const input = document.getElementById('inputText').value.toUpperCase();
    const operation = document.getElementById('operation').value;
    const letters = input.split(/\s+/); // Split input by spaces
    let numbers = letters.map(letter => letterToNumber[letter] || 0); // Convert letters to numbers
    let result;

    // Perform the selected operation
    switch (operation) {
        case '+':
            result = numbers.reduce((acc, num) => acc + num, 0);
            break;
        case '-':
            result = numbers.reduce((acc, num) => acc - num);
            break;
        case '*':
            result = numbers.reduce((acc, num) => acc * num, 1);
            break;
        case '/':
            result = numbers.reduce((acc, num) => num !== 0 ? acc / num : NaN);
            break;
        default:
            result = 0;
    }

    // Handle division by zero
    if (operation === '/' && numbers.includes(0)) {
        result = 'Error: Division by zero';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
