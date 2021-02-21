const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomArrayLength = (elements) => {
  return elements.slice(0, getRandomInteger(0, elements.length -1))
}

export {getRandomInteger, getRandomArrayElement, getRandomArrayLength};

