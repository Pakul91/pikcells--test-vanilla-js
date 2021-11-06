"use strict";

/**
 * object to store data from the server. Will be used to provide data for rendering
 */
export let state = {};

/**
 * fetch data from the server
 * @returns {} with organised data
 */
function fetchData() {
  const data = {
    layers: [
      {
        order: 0,
        items: [
          {
            order: 1,
            name: "Almost Silly Silver",
            imgSrc: "BWK.jpg",
          },
          {
            order: 0,
            name: "Typically Pretty Blue",
            imgSrc: "hk9.jpg",
          },
          {
            order: 2,
            name: "Terribly Honest Black",
            imgSrc: "aDn.jpg",
          },
        ],
      },
      {
        order: 2,
        items: [
          {
            order: 2,
            name: "Too Melodic Silver",
            imgSrc: "jeb.png",
          },
          {
            order: 0,
            name: "Never Generous Silver",
            imgSrc: "VRC.png",
          },
          {
            order: 1,
            name: "Terribly Juicy Green",
            imgSrc: "58Z.png",
          },
        ],
      },
      {
        order: 1,
        items: [
          {
            order: 0,
            name: "Really Eloquent Blue",
            imgSrc: "0Og.png",
          },
          {
            order: 1,
            name: "Extremely Honest Silver",
            imgSrc: "2Ks.png",
          },
          {
            order: 2,
            name: "Terribly Confident Pink",
            imgSrc: "L99.png",
          },
        ],
      },
    ],
    default_configuration: [2, 1, 0],
  };

  state = sortData(data);
}

/**
 * sorting callback function
 * @param {object} a element of items array
 * @param {object} b element of items array
 * @returns result of comparison for ascending order
 */
function sortByOrderProp(a, b) {
  if (a.order < b.order) return -1;
  if (a.order < b.order) return 1;
  return 0;
}

/**
 * Sort provided data
 * @param {object} input data returned from fetch request
 * @returns {object} copy of input data sorted in ascending order
 */
function sortData(input) {
  if (!input) return;

  const data = { ...input };
  //sort layers in ascending order
  data.layers.sort(sortByOrderProp);

  //sort items in each layer in ascending order
  data.layers.forEach((layer) => {
    layer.items.sort(sortByOrderProp);
  });

  return data;
}

fetchData();
