// textarea element for entering of input
var inputfield = document.getElementById('input');
// placeholder for inputfield
const placeholder="Paste / enter input here";

function nkeystr() {
    let input = inputfield.value;
   // stores the input in the localStorage as user paste/input it
   // so the input can be accessed in case of accidental closing of
   // browser tab or reloading
   localStorage.setItem('input', input)
   let x = input.length;
   document.getElementById('nkeystr').innerHTML = '<p id="nkeystr" class="size">'+ x +'</p>'; 
}

function nchar() {
    let input = inputfield.value;
    let a = input.replace(/\s+/g, '');
    let x = a.length;
    document.getElementById('nchar').innerHTML = '<p id="nchar" class="size">'+ x +'</p>'; 
 }

function ucase() {
    let input = inputfield.value;
    let a = input.replace(/\s+/g, ' ');
    let x = a.toUpperCase();
    document.getElementById('ucase').innerHTML = x;
}

function lcase() {
    let input = inputfield.value;
    let x = input.toLowerCase();
    document.getElementById('lcase').innerHTML = x;
}

function fp() {
    let input = inputfield.value;
    let fnd = document.getElementById('fnd').value;
    let rpl = document.getElementById('rpl').value;
    let x = new RegExp(fnd, 'gi')
    let result = input.replace(x, rpl);
    document.getElementById('fp').innerHTML = result;
}

function fps() {
    let input = inputfield.value;
    let fnds = document.getElementById('fnds').value;
    let rpls = document.getElementById('rpls').value;
    let xs = new RegExp(fnds, 'g')
    let result = input.replace(xs, rpls);
    document.getElementById('fps').innerHTML = result;
}

function lowerCase() {
	let email = document.getElementById('email');
  	email.value = email.value.toLowerCase();
}

function reset() {
    // clears the inputField and localstorage
    localStorage.removeItem('input');
    // reloads the html document
    location.reload()
}

function validate() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');
    if (name.value != '' && email.value != '' && subject.value != '' && message.value != '') {
        document.getElementById('submit').innerHTML = '<div class="spinner-border"></div>'
    } else {
      alert('All fields are required !');
    }
}

//gets the stored input from localstorage
storedinput = localStorage.getItem('input');
// if the key doesn't exist in localStorage
// storedinput = null
// so it renders the default inputField from html
if (storedinput === null) {
    inputfield.value = ''
    inputfield.setAttribute('placeholder', placeholder);
} else {
    inputfield.value = storedinput;
    nkeystr()
    nchar()
    ucase()
    lcase()
}
