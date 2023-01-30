const inputfield = document.querySelector('#input'),
placeholder = "Paste / enter input here";
let input, find, repl, regex, modifier;

inputfield.addEventListener('input', nkeystr)

function nkeystr() {
    // sets input variable in global scope to input field's value
    input = inputfield.value;
    nchar();
    // stores the input in the localStorage as user paste/input it
    // so the input can be accessed in case of accidental closing of
    // browser tab or reloading
    localStorage.setItem('input', input);
    if (!input) return document.querySelector('#nkeystr').innerText = '0';
    let output = input.length;
    document.querySelector('#nkeystr').innerText = output; 
}

function nchar() {
    nword();
    if (!input) return document.querySelector('#nchar').innerText = '0';
    let output = input.replace(/\s+/g, '').length;
    document.querySelector('#nchar').innerText = output;
}

function nword() {
    ucase();
    if (!input) return document.querySelector('#nword').innerText = '0';
    let output = input.match(/(\w+)/g).length;
    document.querySelector('#nword').innerText = output;
}

function ucase() {
    lcase();
    let output = input.toUpperCase();
    document.querySelector('#ucase').innerText = output;
}

function lcase() {
    let output = input.toLowerCase();
    document.querySelector('#lcase').innerText = output;
}

function fnr() {
    find = document.querySelector('#find').value;
    repl = document.querySelector('#repl').value;
    modifier = document.querySelector('#modifier').value
    if (modifier === 'case-sensitive') {
        regex = new RegExp(find, 'g');
    } else {
        regex = new RegExp(find, 'gi');
    }
    let output = input.replace(regex, repl);
    document.querySelector('#fnr').innerText = output;
}

function reset() {
    // clears the inputField and localstorage
    localStorage.removeItem('input');
    // reloads the html document
    location.reload();
}

//gets the stored input from localstorage
storedinput = localStorage.getItem('input');
// if the key doesn't exist in localStorage
// storedinput = null
// so it renders the default inputField from html
if (storedinput === null) {
    inputfield.value = '';
    inputfield.setAttribute('placeholder', placeholder);
} else {
    inputfield.value = storedinput;
    nkeystr();
}
