'use strict';

function getIdx(n, lastAnswer, x) {
    return ((x ^ lastAnswer) % n)
}

export function dynamicArray(n, queries) {
    let lastAnswer = 0;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([]);
    }
    const lastAnswers = [];

    for (let i = 0; i < queries.length; i++) {
        const queryType = queries[i][0];
        const x = queries[i][1];
        const y = queries[i][2];
        const idx = getIdx(n, lastAnswer, x);
        if (queryType == 1) {
            arr[idx].push(y);
        }

        if (queryType == 2) {
            lastAnswer = arr[idx][y % arr[idx].length];
            lastAnswers.push(lastAnswer)
            console.log("Adding")
        }
    }

    return lastAnswers
}

console.log("I was executed")
