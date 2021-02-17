const author = {
  avatar: ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png',
  'img/avatars/user07.png', 'img/avatars/user08.png']
};
const offer = {
  title: 'Обьявление№1',
  address: '{{location.x}}', '{{location.y}}',
  price: 5000,
  type: ['palace', 'flat', 'house','bungalow'],
  rooms: 3,
  guests: 5,
  checkin: ['12:00' || '13:00' || '14:00'],
  checkout: ['12:00' || '13:00' || '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Новая просторная квартира в стиле лофт',
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
  location: {x,
  y}
};


const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const adNotification = () => {
  return {
    name: getRandomArrayElement(author) + ' ' + getRandomArrayElement(author),
    author: getRandomArrayElement(avatar),
    offer: getRandomArrayElement(EYES_COLORS),
  };
};

const similarWizards = new Array(10).fill(null).map(() => adNotification());
