const cipherText = "ENTERTAINMENT".trim().toLowerCase()
// const cipherText = "GLIYH".trim().toLowerCase()

// const fs = require('fs');
// let rawdata = fs.readFileSync('english_dictionary.json');
// let dictionary = JSON.parse(rawdata);

cipherLetters = cipherText.split('')

let cipherArr = cipherLetters.reduce((arr, letter, index, refArr) => {
    let temp = {}
    temp.letter = letter;
    temp.repeats = refArr.filter(data => data === letter).length
    arr.push(temp)
    return arr;
}, [])

function computeMessage(cipherArr, key) {
    cipherArr.forEach(cipherObj => {
        const charCode = cipherObj.letter.charAtCode()
       
    });
}

