function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand); // return rand.toFixed(4); - 4 знака после запятой.
}

alert( randomInteger(0, 3) ); //включая 0


//взял из: https://learn.javascript.ru/task/random-int-min-max
