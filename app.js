// textarea element for entering of input
var inputfield = document.getElementById('input');
// placeholder for inputfield
const placeholder="Paste / enter input here";

document.getElementById('input').addEventListener('input', nkeystr);
document.getElementById('input').addEventListener('input', nchar);
document.getElementById('input').addEventListener('input', nword);
document.getElementById('input').addEventListener('input', ucase);
document.getElementById('input').addEventListener('input', lcase);
document.getElementById('email').addEventListener('input', lowerCase);

function nkeystr() {
    let input = inputfield.value;
   // stores the input in the localStorage as user paste/input it
   // so the input can be accessed in case of accidental closing of
   // browser tab or reloading
   localStorage.setItem('input', input)
   let x = input.length;
   document.getElementById('nkeystr').innerHTML = '<p id="nkeystr" class="size">'+ x +'</p>'; 
}

function nword() {
    let input = inputfield.value;
    if (input =='') {
        document.getElementById('nword').innerHTML = '<p id="nword" class="size">'+ 0 +'</p>';
    } else {
        document.getElementById('nword').innerHTML = '<p id="nword" class="size">'+ input.match(/(\w+)/g).length +'</p>';
    }
 }

 function nchar() {
    let input = inputfield.value;
    let a = input.replace(/\s+/g, '');
    let x = a.length;
    document.getElementById('nchar').innerHTML = '<p id="nchar" class="size">'+ x +'</p>'; 
 }

function ucase() {
    let input = inputfield.value;
    let x = input.toUpperCase();
    document.getElementById('ucase').innerHTML = x;
}

function ucasecopy() {
    let ucaseresultfield = document.getElementById('ucase');
    ucaseresultfield.select();
    //ucaseresultfieldsetSelectionRange(0, 99999); 
    let result =  ucaseresultfield.value;
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard.');
}

function lcase() {
    let input = inputfield.value;
    let x = input.toLowerCase();
    document.getElementById('lcase').innerHTML = x;
}

function lcasecopy() {
    let lcaseresultfield = document.getElementById('lcase');
    lcaseresultfield.select();
    //lcasefieldsetSelectionRange(0, 99999); 
    let result =  lcaseresultfield.value;
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard.');
}

function fpValidate() {
    let fnd = document.getElementById('fnd').value;
    let rpl = document.getElementById('rpl').value;
    if (fnd == '' || rpl == '') {
        document.getElementById('fpsubmit').disabled = true;
    } else {
        document.getElementById('fpsubmit').disabled = false; 
    }
}

function fp() {
    let input = inputfield.value;
    let fnd = document.getElementById('fnd').value;
    let rpl = document.getElementById('rpl').value;
    let x = new RegExp(fnd, 'gi')
    let result = input.replace(x, rpl);
    document.getElementById('fp').innerHTML = result;
}

function fpcopy() {
    let fpresultfield = document.getElementById('fp');
    fpresultfield.select();
    //fpresultfieldsetSelectionRange(0, 99999); 
    let result =  fpresultfield.value;
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard.');
}

function fpsValidate() {
    let fnds = document.getElementById('fnds').value;
    let rpls = document.getElementById('rpls').value;
    if (fnds == '' || rpls == '') {
        document.getElementById('fpssubmit').disabled = true;
    } else {
        document.getElementById('fpssubmit').disabled = false; 
    }
}

function fps() {
    let input = inputfield.value;
    let fnds = document.getElementById('fnds').value;
    let rpls = document.getElementById('rpls').value;
    let xs = new RegExp(fnds, 'g')
    let result = input.replace(xs, rpls);
    document.getElementById('fps').innerHTML = result;
}

function fpscopy() {
    let fpsresultfield = document.getElementById('fps');
    fpsresultfield.select();
    //fpsresultfieldsetSelectionRange(0, 99999); 
    let result =  fpsresultfield.value;
    navigator.clipboard.writeText(result);
    alert('Copied to clipboard.');
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
      alert('All fields are required!');
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
    nword()
}