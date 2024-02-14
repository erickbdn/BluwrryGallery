import { c as create_ssr_component, v as validate_component } from "./ssr.js";
const css$1 = {
  code: ".header.svelte-15qm6py.svelte-15qm6py{display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(3, 1fr);grid-column-gap:10px;grid-row-gap:10px}.title.svelte-15qm6py.svelte-15qm6py{grid-area:1 / 2 / 4 / 5;align-self:end}.navigation.svelte-15qm6py.svelte-15qm6py{grid-area:2 / 6 / 4 / 10;display:grid;grid-template-columns:repeat(4, 1fr);grid-column-gap:10px}.navigation.svelte-15qm6py a.svelte-15qm6py{text-align:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="header svelte-15qm6py" data-svelte-h="svelte-1wp9xq"><div class="title svelte-15qm6py"><a href="/">Christopher Ariel</a></div> <nav class="navigation svelte-15qm6py"><a href="/about" class="svelte-15qm6py">About Me</a> <a href="/Gallery" class="svelte-15qm6py">Gallery</a> <a href="/preset" class="svelte-15qm6py">LR Preset</a> <a href="/contact" class="svelte-15qm6py">Contact</a></nav></header>`;
});
const css = {
  code: ".shell.svelte-1pmo6t3{display:flex;flex-direction:column;min-height:100vh}.content.svelte-1pmo6t3{flex:1;margin:5% 0}",
  map: null
};
const Shell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="shell svelte-1pmo6t3">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="content svelte-1pmo6t3"> ${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Shell as S
};
