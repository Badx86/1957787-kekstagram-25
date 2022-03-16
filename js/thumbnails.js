import {multipleObject} from './data.js';

const photos = multipleObject();

const containerPhotos = document.querySelector('.pictures');
const templateWrapper = document.querySelector('#picture');
const template = templateWrapper.content.querySelector('.picture');
const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const newPhoto = template.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = photo.url;
  newPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
  newPhoto.querySelector('.picture__likes').textContent = photo.likes;
  fragment.appendChild(newPhoto);
});

containerPhotos.appendChild(fragment);
