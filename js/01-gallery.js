import { galleryItems } from './gallery-items.js';

const refs = {
	galleryRef: document.querySelector('.gallery'),
};

refs.galleryRef.addEventListener('click', onClickGalleryItem);

function addgaleryItemsMarkup(itemsArr) {
	return itemsArr
		.map(({ original, preview, description }) => {
			return `<div class="gallery__item"> <a class="gallery__link" href="${original}">
		<img class="gallery__image" src="${preview}" data-source="${original}"
			alt="${description}"/></a></div> `;
		})
		.join('');
}

refs.galleryRef.insertAdjacentHTML(
	'beforeend',
	addgaleryItemsMarkup(galleryItems)
);

function onClickGalleryItem(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== 'IMG') {
		return;
	}
	const originalImgEl = basicLightbox.create(`
	<div class="modal">
    	<img src="${evt.target.dataset.source}" width="1280">
	</div>
`);
	originalImgEl.show();

	refs.galleryRef.addEventListener('keydown', evt => {
		if (evt.code === 'Escape') {
			originalImgEl.close();
		}
	});
};



