let countHeads = 0;
let countTails = 0;
let counter = 0;

console.log('H');

while (countHeads < 6 && countTails < 6) {
    let choice = Math.floor(Math.random() * 2);
    if (choice == 0) {
        countHeads++;
    } else if (choice == 1) {
        countTails++;
    }
    counter++;
    console.log(counter);
}

document.getElementById('numFlips').innerText = counter;
document.getElementById('numHeads').innerText = countHeads;
document.getElementById('numTails').innerText = countTails;
document.getElementById('prob').innerText = 'Calculate yourself.';
