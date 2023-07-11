const inc = document.querySelector('.increment');
const dec = document.querySelector('.decrement');
const res = document.querySelector('.reset');
const counter = document.querySelector('.counter-score');

const incrementfn = () => {
  return counter.innerHTML++;
};
const decrementfn = () => {
  return counter.innerHTML--;
};
const resetfn = () => {
  return (counter.innerHTML = 0);
};

inc.addEventListener('click', incrementfn);
dec.addEventListener('click', decrementfn);
res.addEventListener('click', resetfn);
