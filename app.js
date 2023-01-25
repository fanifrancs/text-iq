const inputfield = document.querySelector('#input'),
placeholder = "Paste / enter input here";
let input, find, repl, regex;

function nkeystr() {
    input = inputfield.value;
    // stores the input in the localStorage as user paste/input it
    // so the input can be accessed in case of accidental closing of
    // browser tab or reloading
    localStorage.setItem('input', input);
    let output = input.length;
    document.querySelector('#nkeystr').innerText = output; 
}

function nword() {
    let output = input.match(/(\w+)/g).length;
    document.querySelector('#nword').innerText = output;
}

function nchar() {
    let output = input.replace(/\s+/g, '').length;
    document.querySelector('#nchar').innerText = output; 
}

function ucase() {
    output = input.toUpperCase();
    document.querySelector('#ucase').innerText = output;
}

function lcase() {
    output = input.toLowerCase();
    document.querySelector('#lcase').innerText = output;
}

function fnri() {
    find = document.querySelector('#findi').value;
    repl = document.querySelector('#repli').value;
    regex = new RegExp(find, 'gi');
    let output = input.replace(regex, repl);
    document.querySelector('#fnri').innerText = output;
}

function fnrs() {
    find = document.querySelector('#finds').value;
    repl = document.querySelector('#repls').value;
    regex = new RegExp(find, 'g')
    let output = input.replace(regex, repl);
    document.querySelector('#fnrs').innerText = output;
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
    nchar();
    nword();
    ucase();
    lcase();
}
