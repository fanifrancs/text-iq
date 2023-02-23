const 
inputfield = document.querySelector('#input'),
placeholder = "Paste / enter input here",
nkeystrElement = document.querySelector('#nkeystr'),
ncharElement = document.querySelector('#nchar'),
nwordElement = document.querySelector('#nword'),
ucaseElement = document.querySelector('#ucase'),
lcaseElement = document.querySelector('#lcase'),
fnrElemnt = document.querySelector('#fnr');
//
let input;

inputfield.addEventListener('input', nkeystr);

function nkeystr() {
    // sets input variable in global scope to input field's value
    input = inputfield.value;
    // calls the nchar function
    nchar();
    // stores the input in the localStorage as user paste/input it
    // so the input can be accessed in case of accidental closing of
    // browser tab or reloading
    localStorage.setItem('input', input);
    if (!input) return nkeystrElement.innerText = '0';
    let output = input.length;
    nkeystrElement.innerText = output; 
}

function nchar() {
    // calls nword function
    nword();
    if (!input) return ncharElement.innerText = '0';
    let output = input.replace(/\s+/g, '').length;
    ncharElement.innerText = output;
}

function nword() {
    // calls ucase function
    ucase();
    if (!input) return nwordElement.innerText = '0';
    let output = input.match(/(\w+)/g).length;
    nwordElement.innerText = output;
}

function ucase() {
    // calls lcase function
    lcase();
    let output = input.toUpperCase();
    ucaseElement.innerText = output;
}

function lcase() {
    let output = input.toLowerCase();
    lcaseElement.innerText = output;
}

function fnr() {
    const 
    find = document.querySelector('#find').value,
    repl = document.querySelector('#repl').value,
    modifier = document.querySelector('#modifier').value;
    //
    if (modifier === 'case-sensitive') {
        regex = new RegExp(find, 'g');
    } else {
        regex = new RegExp(find, 'gi');
    }
    let output = input.replace(regex, repl);
    fnrElemnt.innerText = output;
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
