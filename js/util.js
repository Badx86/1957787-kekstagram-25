function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function maxLenStr(str, maxLen)
{
  return str.length <= maxLen;
}

maxLenStr('', 1);

function getRandomArrayElement(ARR) {
  return ARR[getRandomPositiveInteger(0, ARR.length-1)];
}

// Создаем клавишу закрытия окна по нажатию
const isEscKey = (key) => key === 'Esc' || key === 'Escape';

// Создаем имена тега и класса
const doElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

export {getRandomArrayElement, getRandomPositiveInteger, maxLenStr, isEscKey, doElement}; //дописал MaxLenStr
