function setup() {
    noCanvas();

    //does 10 simulations
    for (let i = 0; i < 15; i++) {
        let specialCase = false;
        let countHeads = 0;
        let countTails = 0;
        let counter = 0;
        //runs until ...
        while (countHeads < 6 && countTails < 6) {
            let choice = Math.floor(Math.random() * 2);
            if (choice == 0) {
                countHeads++;
            } else if (choice == 1) {
                countTails++;
            }
            counter++;
        }
        //--------------------------
        console.log(`DONE: countHeads: ${countHeads} countTails: ${countTails}`);
        //--------------------------
        if (counter == 11) {
            specialCase = true;
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
                counter--;
            } else {
                let choice = Math.floor(Math.random() * 2);
                if (choice == 0) {
                    countHeads++;
                } else if (choice == 1) {
                    countTails++;
                }
                counter++;
            }
        }

        createDiv().id(`div${i}`);
        createP(specialCase ? 'Special case' : 'Normal Case').parent(`div${i}`);
        createP(`Number of Tails: ${countTails}`).parent(`div${i}`);
        createP(`Number of Heads: ${countHeads}`).parent(`div${i}`);
        createP(`Number of Flips: ${counter}`).parent(`div${i}`);
    }
}
