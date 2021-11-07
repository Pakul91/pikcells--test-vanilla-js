"use strict";

/**
 * object to store data from the server. Will be used to provide data for rendering
 */
export let state = {};

/**
 * fetch data from the server
 * @returns {} with organised data
 */
export async function fetchData() {
  const url = " https://lab.pikcells.com/code-exercise/data.json";

  try {
    const response = await fetch(url);
    const data = await response.json();

    state = sortData(data);
  } catch (e) {
    state = { error: e.message };
  }
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

  //sort items in each layer in ascending order
  data.layers.forEach((layer) => {
    layer.items.sort(sortByOrderProp);
  });

  return data;
}

fetchData();
