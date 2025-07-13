// import readlineSync from "readline-sync";

// console.log("Enter a series of five words where each word contains more characters than the previous word");

// let words = [];

// for (let index = 0; index < 5; index++) {
//     words[index] = readlineSync.question("Enter a word: ");
// }

// let isIncreasing = true;
// let index = 0;

// while (index < words.length - 1) {
//     if (words[index + 1].length <= words[index].length) {
//         isIncreasing = false;
//     }
//     index = index + 1;
// }

// if (isIncreasing === true) {
//     console.log("Good job, you followed the pattern!");
// } else {
//     console.log("Those words don't follow the pattern, try again.");
// }

import readline from "readline";

function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

const main = async () => {
    console.log("Enter a series of five words where each word contains more characters than the previous word");

    let words = [];

    for (let index = 0; index < 5; index++) {
        const word = await ask(`Enter word ${index + 1}: `);
        words.push(word);
    }

    let isIncreasing = true;
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i + 1].length <= words[i].length) {
            isIncreasing = false;
            break;
        }
    }

    if (isIncreasing) {
        console.log("Good job, you followed the pattern!");
    } else {
        console.log("Those words don't follow the pattern, try again.");
    }
};

main();
