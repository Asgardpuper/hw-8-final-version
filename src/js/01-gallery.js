import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line

import { galleryItems } from "./gallery-items";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

function createElements() {
	return galleryItems
		.map((el) => {
			return `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" /></a>`;
		})
		.join("");
}
galleryBox.innerHTML = createElements();

let test = new simpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
