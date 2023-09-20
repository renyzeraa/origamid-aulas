"use strict";
// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerText,
//     el,
//   };
// }
// const link = document.querySelector("a");
// if (link) {
//   console.log(extractText(link).el.href);
// }
// document.querySelector(".teste");
// function $<Tipo extends Element>(selector: string): Tipo | null {
//   return document.querySelector(selector);
// }
// const link = $<HTMLAnchorElement>("a")?.href;
const link = document.querySelector(".link");
if (link instanceof HTMLVideoElement) {
    link?.volume;
}
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook.preco);
}
handleData();
