var min = 1;
var max = 100;
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var count = 0;

var number =  Math.floor(Math.random() * (max - min + 1)) + min;


console.log(number);

btn.addEventListener('click', btnClick);

function btnClick() {
  console.log(input.value);
  count++;
  if (input.value == number) {
    alert ('You found the number!' + 'you tryied ' + count + 'times');
  } else 
  if (input.value > number) {
    alert ('Too high');
  } else 
  if (input.value < number) {
    alert ('Too Low');
  }
  
}