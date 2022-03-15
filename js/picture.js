import {AVATAR_WIDTH, AVATAR_HEIGHT} from './data.js';
import {isEscKey, doElement} from './util.js';

const userWindow = document.querySelector('.big-picture');
const commentCount = userWindow.querySelector('.social__comment-count');
const commentsLoad = userWindow.querySelector('.comments-loader');
const cancelWindow = userWindow.querySelector('.big-picture__cancel');
const bigImg = userWindow.querySelector('.big-picture__img');
const likesCount = userWindow.querySelector('.likes-count');
const commentsCount = userWindow.querySelector ('.comments-count');
const socialComments = userWindow.querySelector('.social__comments');

const createComment = () => {
  const comment = doElement('li', 'social__comment');
  const avatar = doElement('img', 'social__picture');
  avatar.style.width = AVATAR_WIDTH;
  avatar.style.heght = AVATAR_HEIGHT;
  comment.append(avatar);
  const commentText = doElement('p', 'social__text');
  comment.append(commentText);
  return comment;
};

const showWindow = (previewElement, imageElement) => {
  previewElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    userWindow.classList.remove('hidden');
    commentCount.classList.add('hidden');
    commentsLoad.classList.add('hidden');
    document.body.classList.add('modal-open');
    bigImg.querySelector('img').src = imageElement.url;
    bigImg.querySelector('img').alt = imageElement.alt;
    likesCount.textContent = imageElement.likes;
    commentsCount.textContent = imageElement.comments.length;
    for(let i = 0 ; i < imageElement.comments.length; i++){
      const newComment = createComment();
      newComment.querySelector('img').src = imageElement.comments[i].avatar;
      newComment.querySelector('img').alt = imageElement.comments[i].name;
      newComment.querySelector('p').textContent = imageElement.comments[i].message;
      socialComments.append(newComment);
    }
    document.addEventListener('keydown', (event) => {
      if (isEscKey(event)) {
        evt.preventDefault();
        userWindow.classList.add('hidden');
        document.body.classList.remove('modal-open');
      }
    });
  });
};

cancelWindow.addEventListener('click', (evt) => {
  evt.preventDefault();
  userWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

export {showWindow};
