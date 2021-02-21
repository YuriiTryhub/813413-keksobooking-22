import {AVATARS, TITLES, ADRESS, PRICES, FEATURES, TYPES, ROOMS, GUESTS, CHECKINS, CHECKOUTS, DESCRIPTIONS, PHOTOS} from './data.js';

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomArrayLength = (elements) => {
  return elements.slice(0, getRandomInteger(0, elements.length -1))
}


const getData = () => {
  return {
    author: {
      avatar: getRandomArrayElement(AVATARS),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: getRandomArrayElement(ADRESS),
      price: getRandomArrayElement(PRICES),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomArrayElement(ROOMS),
      guests: getRandomArrayElement(GUESTS),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getRandomArrayLength(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayLength(PHOTOS),
    },
    location: {
      x: getRandomInteger(35.65000, 35.70000),
      y: getRandomInteger(139.70000, 139.80000),
    },
  }
}

const data = new Array(10).fill(null).map(getData);
alert(data);
