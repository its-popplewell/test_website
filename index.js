let countHeads = 0;
let countTails = 0;
let counter = 0;

console.log('JAK WUZ HERE');

while (countHeads < 6 && countTails < 6) {
    let choice = Math.floor(Math.random() * 2);
    if (choice == 0) {
        countHeads++;
    } else if (choice == 1) {
        countTails++;
    }
    counter++;
}
console.log(`DONE: countHeads: ${countHeads} countTails: ${countTails}`);
if (counter == 11) {
    let choice = Math.floor(Math.random() * 2);
    if (choice == 0) {
        countHeads++;
    } else if (choice == 1) {
        countTails++;
    }
    counter++;

    if (countTails == 7 || countHeads == 7) {
        countTails = countTails == 7 ? 6 : countTails;
        countHeads = countHeads == 7 ? 6 : countHeads;
        counter = 11;
    } else {
        let choice = Math.floor(Math.random() * 2);
        if (choice == 0) {
            countHeads++;
        } else if (choice == 1) {
            countTails++;
        }
        counter++;
    }

    console.log('SPECIAL CASE');
    document.getElementById('headerThing').innerText = 'SPECIAL CASE';
}

document.getElementById('numFlips').innerText = counter;
document.getElementById('numHeads').innerText = countHeads;
document.getElementById('numTails').innerText = countTails;
document.getElementById('prob').innerText = 'Calculate yourself.';
