const AVATARS = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png',
  'img/avatars/user07.png', 'img/avatars/user08.png']
const TITLES = ['Обьявление№1', 'Обьявление№2', 'Обьявление№3', 'Обьявление№4', 'Обьявление№5', 'Обьявление№6', 'Обьявление№7', 'Обьявление№8', 'Обьявление№9','Обьявление№10']
const ADRESS = ['{{location.x}} {{location.y}}']
const PRICES = ['9000', '8000', '7000', '6000', '5000', '4000', '3000', '2000', '1500', '1000' ]
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const TYPES = ['palace', 'flat', 'house','bungalow']
const ROOMS = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const GUESTS = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const CHECKINS = ['12:00', '13:00', '14:00']
const CHECKOUTS = ['12:00', '13:00', '14:00']
const DESCRIPTIONS = ['Новая просторная квартира в стиле лофт', 'Нотки скандинаского стиля', 'Огромная кухня', 'Комбинированные спальни', 'Антикварный зал', 'Три уборные и две спальни', 'Высокие потолки', 'Маленькая, но уютная', 'Большая и просторная', 'Много окон и света']
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

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

const data = new Array(10).fill(null).map(getData)
alert(data);
