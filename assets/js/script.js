const counter = document.getElementById('sum');

const incr = document.getElementById('incr-btn');
const decr = document.getElementById('decr-btn');

const save = document.getElementById('save-btn');
const refr = document.getElementById('refr-btn');

const savedCount = document.getElementById('saved-count');

let sum = 0;

function decrement() {
    sum--;
    counter.innerText = sum;
}

decr.addEventListener('click', decrement);

function increment() {
    sum++;
    counter.innerText = sum;
}

incr.addEventListener('click', increment);

function saveCount() {
    savedCount.textContent += sum + ' | ';
    sum = 0;
    counter.innerText = sum;
}

save.addEventListener('click', saveCount);

function refrCount() {
    savedCount.innerText = 0;
}

refr.addEventListener('click', refrCount);