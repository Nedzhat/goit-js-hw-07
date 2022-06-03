import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onOpenModal);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, description }) => {
      return `<img src="${preview}" alt="${description}">`;
    })
    .join('');
}

const resultGallery = createGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', resultGallery);

function onOpenModal(event) {
  console.dir(event.target);
}
