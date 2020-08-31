let keyinfo = document.querySelector('#keyinfo');
let ekey = document.querySelector('#ekey');
let ecode = document.querySelector('#ecode');
let ewhich = document.querySelector('#ewhich');
let table = document.querySelector('#table');

document.addEventListener('keydown', document.addEventListener('keyup', function(event) {
    ekey.style.fontSize = '2.5rem';
    ecode.style.fontSize = '2.5rem';
    if (event.key.length >= 10) { ekey.style.fontSize = '1.8rem'; }
    if (event.code.length >= 10) { ecode.style.fontSize = '1.8rem'; }
    ekey.innerText = event.key;
    ecode.innerText = event.code;
    ewhich.innerText = event.which;
}));

for (i of keylist) {
    table.innerHTML = table.innerHTML + '<tr><td>' + i[0] + '</td><td>' + i[1] + '</td><td>' + i[2] + '</td></tr>'
}

// Space bar doesn't scroll down
window.onkeydown = function(e) {
    return e.code !== 32 && e.key !== " ";
}