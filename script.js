
$( ".btn-default" ).click(function() {
    if ($(this)[0].innerText === 'Lock'){
        $(this)[0].innerText = 'Unlock';
    } else {
        $(this)[0].innerText = 'Lock';
    }
    $(this)[0].parentElement.parentElement.children[1].disabled = !$(this)[0].parentElement.parentElement.children[1].disabled;
});



const currHour = (new Date).getHours();
const firstHour = 9, lastHour = 17;
const inps = $("input");

for (let i=firstHour; i<currHour; i++){
    inps[i-firstHour].style.backgroundColor = '#E8EFE8';
}

inps[currHour-firstHour].style.backgroundColor = 'red';

for (let i=currHour+1; i<=lastHour; i++){
    inps[i-firstHour].style.backgroundColor = 'green';
}

