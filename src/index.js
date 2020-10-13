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
    let arr = expr.match(/.{1,10}/g);
    let array =[];
    for(var i=0; i<arr.length; i++){
    array.push(arr[i].match(/.{1,2}/g));
}
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if(array[i][j]=='00'){
        delete array[i][j];
        }
        if(array[i][j]=='10'){
        array[i][j]='.';
        }
        if(array[i][j]=='11'){
        array[i][j]='-';
        }
    }
    array[i] = array[i].join('');
    if(array[i]=='**********'){
    array[i]=' ';
    }
}
for(let i=0; i<array.length; i++){
    for(var key in  MORSE_TABLE){
        if(key==array[i]){
        array[i]= MORSE_TABLE[key];
        }
    }   
}
return array.join('');
}
module.exports = {
    decode
}