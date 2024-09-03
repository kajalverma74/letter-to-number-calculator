const input = "HELLO";
let sum = 0;

for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if (letterToNumber[letter] !== undefined) {
        sum += letterToNumber[letter];
    }
}

console.log(sum); // Output: 52 (8 + 5 + 12 + 12 + 15)
