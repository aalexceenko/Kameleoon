var text = document.getElementById('text');
var btn = document.getElementById('btn');

btn.addEventListener('click', btnClick);

function btnClick() {
    text.style.display = (text.style.display == 'none') ? 'block' : 'none';
}

