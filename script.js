let output = document.querySelector('#output');

document.addEventListener('keydown', function(event){
    output.innerHTML = '<abbr title="event.key" style="color: gray">Key name: </abbr>' + event.key +
    '<br/><abbr title="event.code / event.which" style="color: gray">Key code: </abbr>' + event.code + ' / ' + event.which;
});