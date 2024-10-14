'use strict';

const images = document.querySelector('.gallery__list');
const mainImg = document.querySelector('#largeImg');

images.addEventListener('click', (e) => {
  e.preventDefault();

  const imageLink = e.target.closest('.list-item__link');

  if (imageLink) {
    mainImg.src = imageLink.href;
  }
});
