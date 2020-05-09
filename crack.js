const fs = require('fs');
let fileData = fs.readFileSync('english_dictionary.json');
let wordList = JSON.parse(fileData);

const cipherText = "VKXTMBOBMR".trim().toLowerCase() //Convert input to lower case
const cipherLetters = cipherText.split('')
let cipherArr = cipherLetters.reduce((arr, letter, index, refArr) => { // Array that includes letters and their respective repeats
    let temp = {}
    temp.letter = letter;
    temp.repeats = refArr.filter(data => data === letter).length
    arr.push(temp)
    return arr;
}, [])

function computeMessage(cipherArr, key) {
    let plainText = ""
    cipherArr.forEach(cipherObj => {
        const curAlphaIndex = cipherObj.letter.charCodeAt(0) - 97
        let decryptAlphaIndex
        if(curAlphaIndex - (key%26) < 0) {
            decryptAlphaIndex = 26 - ((key%26) - curAlphaIndex)
        } else {
            decryptAlphaIndex = curAlphaIndex - (key%26)
        }
        plainText+=String.fromCharCode(97 + decryptAlphaIndex)
    });
    return plainText
}

function checkAgainstWordList(data) {
    return wordList.some(item => item === data)
}

let k=0
let plainText
let continueLoop = true
do {
    plainText = computeMessage(cipherArr, k)
    continueLoop = !checkAgainstWordList(plainText)
    k++
} while (continueLoop)

console.log(`Possible plain text: "${plainText}" with a modular key ${k-1}`)

