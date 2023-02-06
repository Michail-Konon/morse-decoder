const MORSE_TABLE = {
    ' ':      ' ',
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
	let arr = expr.split('');
  let stepArr = [];
  let length = arr.length / 10;
  for(let i = 0; i < length; i++) {
      stepArr.push(arr.splice(0, 10));
    }
  let zeroDel = stepArr.map((el) => Number(el.join('')));
  let space = zeroDel.map((el) => isNaN(el) ? ' ' : el);
  let toStr = space.map((el) => String(el).replace(/11/ig, '-').replace(/10/ig, '.'));
  let almost = toStr.map((el) => MORSE_TABLE[el])
  return  almost.join('')
}

module.exports = {
    decode
}



