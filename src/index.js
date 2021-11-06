import { state } from "./state";

const designDisplay = document.querySelector("desigin-display-container");
const layers = document.querySelectorAll(".layer");
const images = document.querySelectorAll(".img");
const items = document.querySelectorAll(".item");

/**
 *
 */
function populateLayers() {
  if (!state || state === {}) return;

  layers.forEach((layer) => {
    const order = layer.dataset.layer;
    const markup = state.layers[order].items
      .map((item) => itemMarkup(item))
      .join("");

    layer.insertAdjacentHTML("beforeend", markup);
  });
}

function itemMarkup(item) {
  if (!item) return;
  return `
    <p class='item ${item.order === 0 ? "active" : ""}' 
        data-img-src="https://lab.pikcells.com/code-exercise/images/${
          item.imgSrc
        }">
        ${item.name}
    </p> 
    `;
}

function assignImgSrc(layer, src) {
  document.querySelector(`.img-layer${layer}`).setAttribute("src", `${src}`);
}

function initialise() {
  populateLayers();
}

initialise();
