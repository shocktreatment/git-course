console.log('ZAYA');

const numbers = [3, 5, 6, 7, 2, 1];
let min = numbers[0];
for (const number of numbers) {
    if (number < min) {
        min = number;
    }
}
console.log(min);