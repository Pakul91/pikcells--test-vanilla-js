import { fetchData, state } from "./state";
import "./style.css";

const layers = document.querySelectorAll(".layer-container");
const newItemsBtn = document.querySelector(".new-items");
const saveDesignBtn = document.querySelector(".save-design-btn");
const canvas = document.querySelector("canvas");

let items = "";

/**
 * Take data from te state and populate each layer with appropriate items
 * @param {{}} state data retrived from server
 */
function populateLayers(state) {
  if (Object.keys(state).length === 0) return;

  const defConfig = state.default_configuration;

  console.log(defConfig);

  //take each layer and create markup for every item in it.
  layers.forEach((layer) => {
    const layerNr = layer.dataset.layer;

    const markup = state.layers[layerNr].items
      .map((item, i) => itemMarkup(item, layerNr, i, defConfig[layerNr]))
      .join("");

    layer.insertAdjacentHTML("beforeend", markup);
  });
  // assign newly created items to global variable
  items = document.querySelectorAll(".item");
}

/**
 *
 * @param {{}} item object containing data for each item
 * @param {number} layerNr defines which layer the item is assigned to
 * @param {*} i index nr of the item in the array.
 * @returns template literal containing markup for every item
 */
function itemMarkup(item, layerNr, i, defConfig) {
  console.log(defConfig);
  if (!item) return;
  return `
    <p class='item btn ${i === defConfig ? "active" : ""}' 
        data-imgsrc="https://lab.pikcells.com/code-exercise/images/${
          item.imgSrc
        }" data-layer=${layerNr}>
        ${item.name}
    </p> 
    `;
}

/**
 *
 * @param {number} layer dictates which layer img to select
 * @param {string} src string to be passed intu img src attrobute
 */
function assignImgSrc(layer, src) {
  document.querySelector(`.img-layer${layer}`).setAttribute("src", `${src}`);
}

/**
 * assign img src to each layer img from coresponding active layer items
 */
function assignImgSrcOnLoad() {
  if (!items) return;
  items.forEach((item) => {
    if (item.classList.contains("active")) {
      assignImgSrc(item.dataset.layer, item.dataset.imgsrc);
    }
  });
}

/**
 * Callback function for clicking on each item in each Layer
 * @param {{}} event
 * @returns
 */
function handleItemClick(event) {
  const clicked = event.target.closest(".item");

  if (!clicked) return;

  //extract data from clicked item
  const { imgsrc, layer } = clicked.dataset;
  //check if item is already active
  if (!clicked.classList.contains("active")) {
    //remove active class from all elements in given layer
    document
      .querySelectorAll(`[data-layer="${layer}"]`)
      .forEach((element) => element.classList.remove("active"));
    //apply active class to clicked element
    clicked.classList.add("active");
    // assign img src from clicked item data
    assignImgSrc(layer, imgsrc);
  }
}

function drawCanvas() {
  const ctx = canvas.getContext("2d");

  const layer0 = document.querySelector("img-layer0");
  const layer1 = document.querySelector("img-layer1");
  const layer2 = document.querySelector("img-layer2");

  ctx.drawImage(layer0, 0, 0);
}

/**
 * Callback function for clinking on new items btn
//  */
// function handleNewItemsBtnClick(e) {
//   //clear each layer
//   layers.forEach((layer) => {
//     layer.innerHTML = "";
//   });
//   initialise();
// }

layers.forEach((layer) => {
  layer.addEventListener("click", handleItemClick);
});

function saveDesign(e) {
  console.log(e.target);
  document.createElement("canvas");
}

// newItemsBtn.addEventListener("click", handleNewItemsBtnClick);
saveDesignBtn.addEventListener("click", saveDesign);

async function initialise() {
  await fetchData();
  populateLayers(state);
  assignImgSrcOnLoad();
}

initialise();
