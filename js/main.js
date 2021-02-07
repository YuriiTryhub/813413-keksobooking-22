//1
function getRandomInteger(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomInteger(1, 5));

//взял из: https://learn.javascript.ru/task/random-int-min-max

//2
function getRandomFloat(from, to, decimal = 2) {
  if (to > from && from >= 0) {
    return +((Math.random() * (to - from) + from).toFixed(decimal));
  }
}
getRandomFloat(0, 10);
console.log(getRandomFloat(2.99, 3, 2));
