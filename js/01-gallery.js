import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', onOpenModal);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

const resultGallery = createGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', resultGallery);

function onOpenModal(event) {
  event.preventDefault();
  const photoEl = event.target;
  if (photoEl.nodeName !== 'IMG') {
    return;
  }

  modalBox.element().querySelector('img').src = photoEl.dataset.source;
  modalBox.show();
  window.addEventListener('keydown', startListener);
}

function startListener(event) {
  if (event.code === 'Escape') {
    modalBox.close();
    window.removeEventListener('keydown', startListener);
  }
}

const modalBox = basicLightbox.create(`<img src="" />`, {
  onShow: modalBox => ('onShow', modalBox),
  onClose: modalBox => ('onClose', modalBox),
});
