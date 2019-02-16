var parent = document.getElementById('parent');


for (var i = 1; i < 101; i++) {
  var p = document.createElement('p');
  p.innerHTML = i;
  if  ((p.innerHTML % 3 == 0) && (p.innerHTML % 5 == 0)) {
    p.innerHTML += ' ' + 'A/B Testing';
  } else
  if (p.innerHTML % 3 == 0) {
    p.innerHTML += ' ' + 'A / B';
  } else 
  if (p.innerHTML % 5 == 0) {
    p.innerHTML += ' ' + 'Testing';
  } 

  parent.appendChild(p);
}
