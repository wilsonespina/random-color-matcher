// https://vis4.net/chromajs
// https://tailwindcss.com/docs/customizing-colors
// https://www.w3schools.com/colors/colors_hex.asp

import { cssColors, hexColorsMap } from './constants/colors';

function pickRandomNumber (total = 147) {
  return Math.floor(Math.random() * total);
}

function pickRandomColor (number) {
  return cssColors[number];
}

const block1 = document.querySelector('#block-1');
const block2 = document.querySelector('#block-2');
const block3 = document.querySelector('#block-3');
const block4 = document.querySelector('#block-4');
const block5 = document.querySelector('#block-5');
const block6 = document.querySelector('#block-6');
const button = document.getElementById('button');

(() => {

  const color1 = pickRandomColor(pickRandomNumber());
  const color6 = pickRandomColor(pickRandomNumber());
  const scale = chroma.scale([color1,color6]).mode('lch').colors(6);

  const color2 = hexColorsMap[scale[1].toUpperCase().substring(1)];
  const color3 = hexColorsMap[scale[2]];
  const color4 = hexColorsMap[scale[3]];
  const color5 = hexColorsMap[scale[4]];

  block1.style.backgroundColor = `${color1}`;
  block2.style.backgroundColor = scale[1];
  block3.style.backgroundColor = scale[2];
  block4.style.backgroundColor = scale[3];
  block5.style.backgroundColor = scale[4];
  block6.style.backgroundColor = `${color6}`;

  block1.innerHTML = color1;
  block6.innerHTML = color6;


})()

button.addEventListener('click', () => {
  location.reload();
})


