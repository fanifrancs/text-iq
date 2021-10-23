function nchar() {
   let input = document.getElementById('input').value;
   let x = input.length;
   document.getElementById('nchar').innerHTML = '<p id="nchar" class="size">'+ x +'</p>'; 
}

function ucase() {
    let input = document.getElementById('input').value;
    let x = input.toUpperCase();
    document.getElementById('ucase').innerHTML = x;
}

function lcase() {
    let input = document.getElementById('input').value;
    let x = input.toLowerCase();
    document.getElementById('lcase').innerHTML = x;
}

function fp() {
    let input = document.getElementById('input').value;
    let fnd = document.getElementById('fnd').value;
    let rpl = document.getElementById('rpl').value;
    let x = new RegExp(fnd, 'gi')
    let result = input.replace(x, rpl);
    document.getElementById('fp').innerHTML = result;
}

function lowerCase() {
	let email = document.getElementById('email');
  	email.value = email.value.toLowerCase();
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