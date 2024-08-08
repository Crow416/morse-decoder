const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr1.push(expr.slice(i, i + 10));
    }

    arr1.forEach((item) => {
        while (item.startsWith('0')) {
            item = item.slice(1);
        }
        arr2.push(item);
    });

    arr2.forEach((item, index) => {
        let str = '';

        if (item === '**********') {
            str = ' '
        } else {
            for (let i = 0; i < item.length; i += 2) {
                let j = item.slice(i, i + 2);
                if (j === '10') {
                    str += '.'
                } else {
                    str += '-'
                }
            }
        }

        arr2[index] = str;
    });

    arr2.forEach((item, index) => {
        if (MORSE_TABLE[item]) arr2[index] = MORSE_TABLE[item];
    });

    return arr2.join('');
}

module.exports = {
    decode
}