let keyinfo = document.querySelector('#keyinfo');
let ekey = document.querySelector('#ekey');
let ecode = document.querySelector('#ecode');
let ewhich = document.querySelector('#ewhich');
let table = document.querySelector('#table');

document.addEventListener('keydown', document.addEventListener('keyup', function(event) {
    document.querySelector('#keyinfostart').style.display = 'none';
    keyinfo.style.display = 'flex';
    ekey.innerText = event.key;
    if (event.code == ' ' || event.code == '') { ekey.innerText = '\n'; }
    ecode.innerText = event.code;
    ewhich.innerText = event.which;
}));

for (i of keylist) {
    table.innerHTML = table.innerHTML + '<tr class="trhover"><td>' + i[0] + '</td><td>' + i[1] + '</td><td>' + i[2] + '</td></tr>'
}

// Space bar doesn't scroll down
window.onkeydown = function(e) {
    return e.code !== 32 && e.key !== " ";
}