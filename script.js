function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    // Loop through each symbol and value
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];

        // Append the symbol to the result while the value can be subtracted from num
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example usage:
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(3999)); // Output: MMMCMXCIX

