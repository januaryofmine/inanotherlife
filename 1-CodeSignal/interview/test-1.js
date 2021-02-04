'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getArticleTitles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING author as parameter.
 * 
 * URL for cut and paste: 
 * https://jsonmock.hackerrank.com/api/articles?author=<authorName>&page=<num>
 *
 */

const URL = 'https://jsonmock.hackerrank.com/api/articles';

function callAPI(url, authorName) {
    return new Promise((resolve, reject) => {
        https.get(`${url}?author=${authorName}`, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            resolve(JSON.parse(data));
        });

        }).on("error", (err) => {
            reject(err);
        });
    });
}

async function getArticleTitles(author) {
    const initialDB = await callAPI(URL, author);
    const rs = initialDB.data.filter(article => article.title !== null || article.story_title !== null)
            .map(article => article.title ? article.title : article.story_title);
    return rs;
}

async function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const author = 'epaga';

    const result = await getArticleTitles(author);

    // ws.write(result.join('\n') + '\n');

    // ws.end();
}

main();