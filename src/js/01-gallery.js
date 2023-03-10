// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
