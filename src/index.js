import { state } from "./state";

const designDisplay = document.querySelector("desigin-display-container");
const layers = document.querySelectorAll(".layer");
let items = "";

/**
 *
 */
function populateLayers() {
  if (!state || state === {}) return;

  layers.forEach((layer) => {
    const order = layer.dataset.layer;
    const markup = state.layers[order].items
      .map((item) => itemMarkup(item, order))
      .join("");

    layer.insertAdjacentHTML("beforeend", markup);
  });
  items = document.querySelectorAll(".item");
}

function itemMarkup(item, order) {
  if (!item) return;
  return `
    <p class='item ${item.order === 0 ? "active" : ""}' 
        data-imgsrc="https://lab.pikcells.com/code-exercise/images/${
          item.imgSrc
        }" data-layer=${order}>
        ${item.name}
    </p> 
    `;
}

function assignImgSrc(layer, src) {
  document.querySelector(`.img-layer${layer}`).setAttribute("src", `${src}`);
}

function assignImgSrcOnLoad() {
  if (!items) return;
  items.forEach((item) => {
    if (item.classList.contains("active")) {
      console.log(item.dataset.layer, item.dataset);
      assignImgSrc(item.dataset.layer, item.dataset.imgsrc);
    }
  });
}

function initialise() {
  populateLayers();
  assignImgSrcOnLoad();
}

initialise();
